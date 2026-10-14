// Book Tracker - In-Memory Book Creation & Dynamic Rendering

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const addBookForm = document.getElementById('add-book-form');
  const titleInput = document.getElementById('book-title');
  const authorInput = document.getElementById('book-author');
  const statusSelect = document.getElementById('book-status');
  const titleError = document.getElementById('title-error');
  const authorError = document.getElementById('author-error');
  const bookList = document.getElementById('book-list');

  // In-memory state (newest books stored at the beginning)
  const books = [];

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

  // Render books to the DOM
  function renderBooks() {
    bookList.innerHTML = '';

    books.forEach((book) => {
      const card = document.createElement('article');
      card.className = 'book-card';

      card.innerHTML = `
        <div class="book-info">
          <h3 class="book-card-title">${escapeHTML(book.title)}</h3>
          <p class="book-card-author">by ${escapeHTML(book.author)}</p>
        </div>
        <div class="book-status-wrapper">
          <span class="status-badge ${getStatusClass(book.status)}">${escapeHTML(book.status)}</span>
        </div>
      `;

      bookList.appendChild(card);
    });
  }

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

    // 5. Trim whitespace from beginning and end
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const status = statusSelect.value;

    let isValid = true;

    // 4. Validate Title
    if (!title) {
      titleError.textContent = 'Please enter a title';
      titleInput.classList.add('input-invalid');
      isValid = false;
    } else {
      titleError.textContent = '';
      titleInput.classList.remove('input-invalid');
    }

    // 4. Validate Author
    if (!author) {
      authorError.textContent = 'Please enter an author';
      authorInput.classList.add('input-invalid');
      isValid = false;
    } else {
      authorError.textContent = '';
      authorInput.classList.remove('input-invalid');
    }

    // Stop if validation fails
    if (!isValid) {
      return;
    }

    // 1. Create a book object
    const newBook = {
      id: 'book_' + Date.now(),
      title: title,
      author: author,
      status: status,
      createdAt: Date.now()
    };

    // 2. Add to top of array so newest book appears first
    books.unshift(newBook);

    // 3. Render the updated list
    renderBooks();

    // 6. Clear the form and reset focus
    addBookForm.reset();
    titleInput.focus();
  });
});
