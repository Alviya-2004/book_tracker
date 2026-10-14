# Project Prompts & Development Log

This document tracks the five key milestones of the Book Tracker web application development. Exactly five major entries are reserved for the project lifecycle to document decisions, outcomes, and corrections.

---

## Entry 1: Project Planning & Initial Skeleton Setup

* **Prompt:**
  > "I want to build a simple Book Tracker web app using HTML, CSS and JavaScript. It should let users add books with a title, author and status (To read, Reading or Finished), view their books with the newest ones first, search by title or author, change a book's status, and keep the data saved even after refreshing the page using localStorage.
  >
  > I want to build this step by step instead of generating the whole app at once. I also want to test each feature before moving to the next one and make multiple Git commits as I complete each working feature.
  >
  > Before writing any code, can you help me plan the project? Tell me which files we need, what each file will do, how we'll store the book data, and the order in which we should build and test the features.
  >
  > Don't create or modify any files yet. Just give me the plan and wait for my response."

* **Plan Suggested:**
  A 7-step roadmap breaking down development into isolated, testable milestones:
  1. *Step 1: Git & HTML Skeleton* (`index.html`) — Semantic structure (header, search input, book form, empty book list).
  2. *Step 2: Design System & Styling* (`styles.css`) — Subtle, minimalistic theme tailored for book lovers (warm paper tones, elegant serif headings, clean inputs, muted status indicators).
  3. *Step 3: Add & Display Books (In-Memory)* (`app.js`) — Form validation, state array, dynamic card rendering ordered newest first.
  4. *Step 4: Persistence with `localStorage`* — Sync state to storage and restore on page load.
  5. *Step 5: Status Updating* — Interactive status control per card.
  6. *Step 6: Real-time Search & Filter* — Filtering by title and author case-insensitively.
  7. *Step 7: Polish & Micro-interactions* — Empty states, animations, and edge-case handling.
  
  Data storage schema defined as:
  ```json
  {
    "id": "string",
    "title": "string",
    "author": "string",
    "status": "To read | Reading | Finished",
    "createdAt": 1728919920000
  }
  ```

* **Actual Implementation in this Step:**
  - Verified directory and checked Git status (ensuring no existing or nested repositories).
  - Configured Git environment for version control tracking.
  - Created semantic `index.html` featuring:
    - Page title and subtitle.
    - Search input (`#search-input`) with placeholder.
    - Book creation form (`#add-book-form`) with Title, Author, and Status dropdown (`To read`, `Reading`, `Finished`).
    - Dedicated empty section container (`#book-list`) for future cards.
    - Linked `styles.css` and deferred `app.js`.
  - Created `styles.css` following a minimalistic, subtle book-lover aesthetic:
    - Warm paper background palette (`#f9f7f2`), soft surface cards (`#ffffff`), and subtle borders (`#e7e2d7`).
    - Editorial serif titles with clean sans-serif controls.
    - Restrained, muted sage accents and status badge palette.
  - Created initial `app.js` with DOM initialization placeholder (no dummy data or premature logic).
  - Initialized Git repository and verified file staging status without committing (awaiting user approval).

* **Outcome & Status:**
  - Structure and styling verified; ready for browser inspection and user commit confirmation.

---

## Entry 2: Core In-Memory Book Creation & Rendering

* **Prompt:**
  > "Now let's implement the first actual feature. I want to be able to add books and see them in the list.
  >
  > Please check the existing index.html, styles.css and app.js before making changes. Keep the current design and file structure instead of rebuilding everything.
  >
  > Implement these requirements:
  > 1. When I submit the form, create a book using the entered title, author and selected status.
  > 2. Display the newly added book at the top of the list, so the newest book appears first.
  > 3. Show the title, author and current status on each book card.
  > 4. Title and author are required. If I submit the form with an empty title, show 'Please enter a title' under the title field. If the author is empty, show 'Please enter an author' under the author field.
  > 5. Remove unnecessary spaces from the beginning and end of the title and author.
  > 6. If the form is valid, add the book to the list and clear the form.
  > 7. Use plain JavaScript and the existing HTML and CSS files. Don't use dummy data or add localStorage, search functionality, status editing, deletion, or other new features yet."

* **Implementation & Actual Outcome:**
  - `index.html`: Added `novalidate` attribute to `#add-book-form` and added inline error message containers (`#title-error` and `#author-error`) under each field.
  - `styles.css`: Added styles for inline error messages (`.error-message`, `.input-invalid`) and styled `.book-card` with flex layout, hover effects, and `.status-badge` variants for `To read`, `Reading`, and `Finished`.
  - `app.js`:
    - Set up in-memory `books` array.
    - Implemented form submit listener preventing default browser submission.
    - Added whitespace trimming (`.trim()`) to title and author inputs.
    - Enforced validation: displays "Please enter a title" and "Please enter an author" under their respective fields when empty; clears errors on user input.
    - Prepended new book objects using `books.unshift(newBook)` to ensure newest books render at the top.
    - Added `renderBooks()` function dynamically creating cards showing Title, Author, and Status badge.
    - Cleared form fields with `form.reset()` and refocused title field on valid submission.
  - Verification: Changes deployed locally and ready for user manual browser verification and feature-branch Git commit.

---

## Entry 3: LocalStorage Persistence & State Hydration
*(Reserved for Milestone 3: Saving state to localStorage and hydrating upon page refresh)*

---

## Entry 4: Interactive Status Toggle & Real-Time Search Filtering
*(Reserved for Milestone 4: Inline status modification and live search query filtering)*

---

## Entry 5: Polish, Edge Cases & AI Reflection
*(Reserved for Milestone 5: UI refinements, empty state handling, and recording a genuine AI mistake and how it was corrected)*
