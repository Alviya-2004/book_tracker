# Book Tracker — Project Prompt Log

## Prompt 1: Planning and Initial Setup

**Prompt:**

"I want to build a simple Book Tracker web app using HTML, CSS and JavaScript. Users should be able to add books with a title, author and status, see the newest books first, search by title or author, change the status and keep their books saved after refreshing the page. Before writing code, help me plan the files and the order in which we should build and test each feature. I also want to make separate Git commits as I complete each feature."

**What happened:**

The AI suggested a simple project structure with `index.html`, `styles.css`, `app.js` and `PROMPTS.md`. We created the initial page with the book form, status dropdown and search field. We also set up Git to track the project.

---

## Prompt 2: Add Books and Display the List

**Prompt:**

"Now let's make the Add Book form work. When I enter a title, author and status and click Add Book, the book should appear at the top of the list with its details. Title and author should be required, and I want a clear error message under the field if either is empty. Please keep the existing design and build only this feature so I can test it before moving on."

**What happened:**

The AI implemented the form validation and dynamically displayed book cards, with the newest book appearing first. I tested empty fields, spaces-only input and adding multiple books to check the order. The feature worked as expected in my initial tests.

---

## Prompt 3: Save Books Using localStorage

**Prompt:**

"Now I want my books to remain saved even after I refresh the page. Please use localStorage to save the complete book list and load it when the page opens. Make sure the title, author, status and newest-first order are preserved. Keep the existing features working and explain how I can test the saved data."

**What happened:**

The AI added functions to save the book list in localStorage and load it when the page opens. It also handled empty or invalid saved data. I tested adding books and refreshing the page to check whether the saved information remained available.

---

## Prompt 4: Change a Book's Status

**Prompt:**

"Now let's add the option to change a book's status. Each book should have a control with the three statuses: To read, Reading and Finished. When I select a new status, the displayed label should update immediately and the change should be saved in localStorage. Please make sure changing one book does not affect the others, and help me test the status changes after refreshing the page."

**What happened:**

The AI added a status dropdown to each book card and saved status changes in localStorage. I checked that each book could be updated independently and that its selected status remained saved after refreshing the page.

---

## Prompt 5: Search Books and Fix a Genuine AI Issue

**Prompt:**

"Now let's add a search box that filters books by title or author as I type. It should ignore capital and small letters, show a message when there are no matching books, and display the full list again when I clear the search. Please keep all existing features working. If we find any problems while testing, help me identify the cause and fix them."

**What happened:**

The AI implemented real-time, case-insensitive searching by title and author. The search filters the displayed list without removing books from storage, and clearing the search shows the full list again.

During the Git workflow, I also encountered an error because Git tried to use the unavailable `less` pager in my Windows terminal. After I shared the error output, the AI suggested using `git --no-pager` to display the results directly in the terminal.

This helped me understand how to use terminal output to identify and resolve an environment-related issue.
