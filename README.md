# 📖 Book Tracker

A minimalist, quiet reading tracker web application designed specifically for book lovers. Track your personal library, manage your reading progression, and search your collection in real-time.

Built with **vanilla HTML5, CSS3, and JavaScript**, featuring local storage persistence and a distraction-free, warm paper-toned aesthetic.

---

## ✨ Features

* **📚 Add & Organize Books**: Add books with Title, Author, and Status (`To read`, `Reading`, `Finished`).
* **🔄 Sequential Status Workflow**: Follows a strict, natural reading progression:
  * `To read` → can advance to `Reading`.
  * `Reading` → can advance to `Finished`.
  * `Finished` → completed and locked from moving backward.
* **⏱️ Newest-First Ordering**: Newly added books automatically appear at the top of your shelf.
* **🔍 Real-Time Search**: Instant, case-insensitive filtering by title or author as you type—without requiring a page refresh or submit button.
* **💾 Safe LocalStorage Persistence**: Automatically saves your shelf state across sessions, with built-in error handling and resilience against corrupted data.
* **🛡️ Inline Form Validation**: Real-time validation requiring title and author, trimming unnecessary whitespace, and providing subtle inline guidance.
* **🎨 Literary Aesthetic**: Inspired by the tactile warmth of reading—featuring editorial serif typography, warm paper tones (`#f9f7f2`), muted sage-green accents (`#3a4a40`), and custom pill-badge dropdowns with an open-book icon.
* **📱 Fully Responsive**: Fluidly adapts across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

* **HTML5**: Semantic elements, accessible form labels, and inline SVGs.
* **CSS3**: Custom properties (CSS variables), modern card layout, flexbox, micro-transitions, and responsive styling without external frameworks.
* **JavaScript (ES6+)**: Vanilla DOM manipulation, event delegation, client-side filtering, and resilient `localStorage` serialization.

---

## 📁 Project Structure

```text
BOOK_TRACKER/
├── index.html       # Semantic page layout, search field, form & shelf container
├── styles.css       # Design tokens, color palette, typography & animations
├── app.js           # Core state management, search filtering & persistence
├── PROMPTS.md       # Development log tracking 5 major milestone prompts
└── README.md        # Project overview and documentation
```

---

## 🚀 Getting Started

No build tools, bundlers, or servers required!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Alviya-2004/book_tracker.git
   ```

2. **Open the application:**
   * Navigate to the project folder and double-click `index.html` to open it in your web browser.
   * Or open it directly from the terminal:
     ```powershell
     Start-Process index.html
     ```

---

## 🌿 Git & Development Workflow

This project was built iteratively following a feature-branch Git workflow:
* `main`: Stable production branch.
* `feature/add-and-display-books`: In-memory book creation, newest-first ordering, and inline validation.
* `feature/update-book-status`: LocalStorage persistence, safe hydration, and interactive status updating.
* `feature/search-and-filter`: Real-time title/author search, empty states, and sequential reading workflow enforcement.

Development decisions, actual milestone outcomes, and an AI debugging reflection are documented in [`PROMPTS.md`](PROMPTS.md).

---

## 👤 Author

Developed by **[Alviya-2004](https://github.com/Alviya-2004)**.
