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
*(Reserved for Milestone 2: Dynamic state management, form submission handling, and newest-first card rendering)*

---

## Entry 3: LocalStorage Persistence & State Hydration
*(Reserved for Milestone 3: Saving state to localStorage and hydrating upon page refresh)*

---

## Entry 4: Interactive Status Toggle & Real-Time Search Filtering
*(Reserved for Milestone 4: Inline status modification and live search query filtering)*

---

## Entry 5: Polish, Edge Cases & AI Reflection
*(Reserved for Milestone 5: UI refinements, empty state handling, and recording a genuine AI mistake and how it was corrected)*
