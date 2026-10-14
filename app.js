// Book Tracker - Core Logic & LocalStorage Persistence

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const addBookForm = document.getElementById('add-book-form');
  const searchInput = document.getElementById('search-input');
  const titleInput = document.getElementById('book-title');
  const authorInput = document.getElementById('book-author');
  const statusSelect = document.getElementById('book-status');
  const titleError = document.getElementById('title-error');
  const authorError = document.getElementById('author-error');
  const bookList = document.getElementById('book-list');

  // LocalStorage Key
  const STORAGE_KEY = 'book_tracker_books';

  // Safely load books from localStorage with error handling for missing/corrupted data
  function loadBooksFromStorage() {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      
      // 5. If no data exists yet, start with an empty list
      if (!storedData) {
        return [];
      }

      const parsedData = JSON.parse(storedData);

      // 6. Safe validation: ensure parsed data is an array
      if (!Array.isArray(parsedData)) {
        console.warn('LocalStorage data is not an array. Recovering with empty list.');
        return [];
      }

      // Filter out any corrupted or incomplete items
      const validBooks = parsedData.filter((item) => {
        return (
          item &&
          typeof item === 'object' &&
          typeof item.title === 'string' &&
          typeof item.author === 'string' &&
          typeof item.status === 'string'
        );
      });

      // 4. Ensure newest-first ordering (descending by createdAt timestamp)
      validBooks.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      return validBooks;
    } catch (error) {
      // 6. Graceful recovery: if JSON is corrupted or invalid, don't crash
      console.error('Failed to parse books from localStorage. Corrupted data handled gracefully:', error);
      return [];
    }
  }

  // Save books array to localStorage
  function saveBooksToStorage(booksArray) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(booksArray));
    } catch (error) {
      console.error('Failed to save books to localStorage:', error);
    }
  }

  // Initialize books state from storage
  let books = loadBooksFromStorage();

  // Helper function to escape HTML special characters for safe rendering
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Helper to map status to badge CSS class
  function getStatusClass(status) {
    switch (status) {
      case 'Reading':
        return 'status-reading';
      case 'Finished':
        return 'status-finished';
      case 'To read':
      default:
        return 'status-toread';
    }
  }

  // Render books to the DOM with live search filtering
  function renderBooks() {
    bookList.innerHTML = '';

    const query = searchInput.value.trim().toLowerCase();

    // 2-5. Filter by title or author (case-insensitive substring match)
    const filteredBooks = books.filter((book) => {
      if (!query) {
        return true;
      }
      const titleMatch = book.title.toLowerCase().includes(query);
      const authorMatch = book.author.toLowerCase().includes(query);
      return titleMatch || authorMatch;
    });

    // 7. Show a clear message if no books match
    if (filteredBooks.length === 0) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'empty-search-message';
      if (books.length === 0) {
        messageDiv.textContent = 'Your reading shelf is empty. Add a book above to get started!';
      } else {
        messageDiv.textContent = 'No books found matching your search.';
      }
      bookList.appendChild(messageDiv);
      return;
    }

    // Render cards for matching books
    filteredBooks.forEach((book) => {
      const card = document.createElement('article');
      card.className = 'book-card';
      card.id = `card-${book.id}`;

      // Enforce sequential status options:
      // "To read" can advance to "Reading"
      // "Reading" can advance to "Finished"
      // "Finished" is locked and cannot move backward
      let statusControlHTML = '';
      if (book.status === 'To read') {
        statusControlHTML = `
          <select 
            id="status-${book.id}" 
            class="status-select status-toread" 
            data-book-id="${book.id}"
            aria-label="Change status for ${escapeHTML(book.title)}"
          >
            <option value="To read" selected>To read</option>
            <option value="Reading">Reading</option>
          </select>
        `;
      } else if (book.status === 'Reading') {
        statusControlHTML = `
          <select 
            id="status-${book.id}" 
            class="status-select status-reading" 
            data-book-id="${book.id}"
            aria-label="Change status for ${escapeHTML(book.title)}"
          >
            <option value="Reading" selected>Reading</option>
            <option value="Finished">Finished</option>
          </select>
        `;
      } else {
        // Status is Finished: locked from changing back to To read or Reading
        statusControlHTML = `
          <select 
            id="status-${book.id}" 
            class="status-select status-finished" 
            data-book-id="${book.id}"
            aria-label="Status for ${escapeHTML(book.title)}: Finished (locked)"
            disabled
          >
            <option value="Finished" selected>Finished</option>
          </select>
        `;
      }

      card.innerHTML = `
        <div class="book-info">
          <h3 class="book-card-title">${escapeHTML(book.title)}</h3>
          <p class="book-card-author">by ${escapeHTML(book.author)}</p>
        </div>
        <div class="book-status-wrapper">
          <label for="status-${book.id}" class="sr-only">Status for ${escapeHTML(book.title)}</label>
          ${statusControlHTML}
        </div>
      `;

      bookList.appendChild(card);
    });
  }

  // 2. Real-time filtering as user types (no enter or search button needed)
  searchInput.addEventListener('input', () => {
    renderBooks();
  });

  // Handle Changing Status of an Individual Book (Sequential workflow: To read -> Reading -> Finished)
  bookList.addEventListener('change', (e) => {
    if (e.target && e.target.classList.contains('status-select')) {
      const bookId = e.target.dataset.bookId;
      const newStatus = e.target.value;

      // 6. Match by unique ID so changing one book does not affect other books
      const targetBook = books.find((b) => b.id === bookId);
      if (targetBook) {
        const currentStatus = targetBook.status;

        // 1-3. Enforce valid sequential transitions:
        // "To read" can go to "Reading"
        // "Reading" can go to "Finished"
        // "Finished" cannot be changed
        const isValidTransition =
          (currentStatus === 'To read' && newStatus === 'Reading') ||
          (currentStatus === 'Reading' && newStatus === 'Finished');

        if (isValidTransition) {
          targetBook.status = newStatus;

          // 4. Save updated status to localStorage
          saveBooksToStorage(books);

          // Re-render so the dropdown updates options for the next valid step
          renderBooks();
        } else {
          // Revert dropdown if an invalid transition is attempted
          renderBooks();
        }
      }
    }
  });

  // Initial render on page load / refresh
  renderBooks();

  // Clear validation error when user begins typing
  titleInput.addEventListener('input', () => {
    if (titleInput.value.trim()) {
      titleError.textContent = '';
      titleInput.classList.remove('input-invalid');
    }
  });

  authorInput.addEventListener('input', () => {
    if (authorInput.value.trim()) {
      authorError.textContent = '';
      authorInput.classList.remove('input-invalid');
    }
  });

  // Handle Form Submission
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const status = statusSelect.value;

    let isValid = true;

    // Validate Title
    if (!title) {
      titleError.textContent = 'Please enter a title';
      titleInput.classList.add('input-invalid');
      isValid = false;
    } else {
      titleError.textContent = '';
      titleInput.classList.remove('input-invalid');
    }

    // Validate Author
    if (!author) {
      authorError.textContent = 'Please enter an author';
      authorInput.classList.add('input-invalid');
      isValid = false;
    } else {
      authorError.textContent = '';
      authorInput.classList.remove('input-invalid');
    }

    if (!isValid) {
      return;
    }

    // 3. Create complete book object (preserving id, title, author, status, createdAt)
    const newBook = {
      id: 'book_' + Date.now(),
      title: title,
      author: author,
      status: status,
      createdAt: Date.now()
    };

    // 4. Add to beginning of array (newest first)
    books.unshift(newBook);

    // 1. Save updated book list to localStorage
    saveBooksToStorage(books);

    // Reset search input so newly added book is visible immediately
    searchInput.value = '';

    // 2. Render the updated list
    renderBooks();

    // Clear form and reset focus
    addBookForm.reset();
    titleInput.focus();
  });
});
