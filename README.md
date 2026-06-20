💇‍♀️ Sana Sarah — Salon Website

A modern, fully responsive salon and hair-styling website built with React and Vite. Designed for Sana Sarah / Headhunter Hairstyling, the site lets clients browse services and pricing, explore the stylist team, view a treatment gallery, and book appointments through a guided multi-step flow.


✨ Features

- Home page — hero section, trust strip, salon story, featured services, before/after gallery, team leader highlights, limited-time offer banner, and a "home services at your doorstep" section

- Services menu— interactive card grid covering 13 treatment categories (threading & waxing, skin polishing, facials, massage, nail care, mehendi, signature treatments, and more), each expanding in place to reveal a full price list
You've got two options — pick whichever fits.
Option A: Edit directly on GitHub (no terminal needed)

Go to your repo: https://github.com/Muskan-Fatimaa/salon_website
Click on README.md in the file list
Click the pencil icon (✏️) in the top-right of the file view — this opens GitHub's built-in editor
Select all the existing text and delete it, then paste in the new README content
Scroll down to the bottom — you'll see a "Commit changes" section
Add a short commit message like Update README
Make sure "Commit directly to the main branch" is selected
Click Commit changes

That's it — the README updates immediately on GitHub. Simple for one-off edits, but your local project folder won't have the new version unless you also pull it down (see note at the end).
Option B: Edit locally and push (recommended, keeps everything in sync)
This is better if you're going to keep working on the project locally too.
1. Replace the file on your computer

Open your project folder, find README.md in the root, and replace its contents with the new version (open it in VS Code, select all, delete, paste the new content, save).
2. Open PowerShell in your project folder (same as before — cd into it, or right-click → "Open in Terminal")
3. Stage, commit, and push

- Stylist directory — searchable and filterable team grid with specialty filters, individual stylist profile pages (bio, education, specialties, languages, working hours)

- Multi-step booking flow — 4-step guided appointment booking (service → stylist → date/time → contact info) with inline validation and a live running summary

- Gallery — filterable portfolio of past work across haircuts, styling, color, and treatments, with a lightbox view

- Contact page — salon info cards, a contact form, and an FAQ accordion
-Fully responsive — adapted layouts for desktop, tablet, and mobile breakpoints throughout

---

🛠️ Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Framework   | React 18                |
| Build tool  | Vite                    |
| Routing     | React Router DOM        |
| Styling     | Plain CSS (component-scoped stylesheets, CSS custom properties) |
| Icons       | Font Awesome             |
| Fonts       | Google Fonts — Playfair Display & Nunito |

No external UI kit is used — all components and styling are custom-built for this project.

---

📂 Project Structure

```
src/
├── assets/
│   ├── services/        # service category images
│   ├── stylists/        # stylist headshots
│   └── ...               # hero/background imagery
├── components/
│   ├── Navbar.jsx / .css
│   ├── Footer.jsx / .css
│   ├── ServiceCard.jsx / .css
│   └── StylistCard.jsx / .css
├── pages/
│   ├── Home.jsx / .css
│   ├── Services.jsx / .css
│   ├── Stylists.jsx / .css
│   ├── StylistProfile.jsx / .css
│   ├── Gallery.jsx / .css
│   ├── Booking.jsx / .css
│   ├── Contact.jsx / .css
│   └── About.jsx / .css
├── styles/
│   └── design-system.css
├── App.jsx
└── main.jsx
```

---

🎨 Design System

The site uses a warm, rose/champagne color palette consistent across pages:

| Token         | Hex       | Use                          |
|----------------|-----------|-------------------------------|
| `--rose`       | `#c0616e` | Primary accent, buttons       |
| `--blush`      | `#f2d4d7` | Borders, soft tints           |
| `--champagne`  | `#e8d5c0` | Hero detail accents           |
| `--ivory`      | `#faf6f1` | Page background                |
| `--dark`       | `#1e1418` | Headings, near-black text     |
| `--muted`      | `#7a6068` | Body / secondary text          |

Headings use **Playfair Display** (serif, editorial feel); body text uses **Nunito** (clean, legible at small sizes).

---

🚀 Getting Started

Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

Installation

```bash
# Clone the repository
git clone https://github.com/Muskan-Fatimaa/salon_website.git

# Move into the project folder
cd salon_website

# Install dependencies
npm install
```

Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite's default port).

Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready to deploy to any static host.

 Preview the production build

```bash
npm run preview
```

---

## 📄 Pages & Routes

| Route                  | Page              | Description                                  |
|-------------------------|-------------------|-----------------------------------------------|
| `/`                     | Home              | Landing page with hero, services, team highlights |
| `/services`              | Services          | Full treatment menu with pricing               |
| `/stylists`              | Stylists          | Searchable stylist directory                   |
| `/stylists/:id`          | Stylist Profile   | Individual stylist bio and details             |
| `/gallery`                | Gallery           | Filterable work portfolio with lightbox        |
| `/booking`                | Booking           | 4-step appointment booking flow                |
| `/contact`                | Contact           | Contact form, salon info, FAQ                  |
| `/about`                  | About             | Salon story, values, stats                     |

---

📌 Roadmap / Ideas for Future Improvement

- Connect the booking form to a real backend / email service (currently simulated client-side)
- Replace placeholder Unsplash imagery in Gallery and Stylist Profile with the salon's own photography
- Add authentication for staff to manage bookings
- Persist gallery/stylist data via a CMS or database instead of hardcoded arrays

---
🤝 Contributing

This is a personal/academic project, but suggestions and pull requests are welcome. Please open an issue first to discuss any significant changes.

---

📜 License

This project is open source and available under the [MIT License](LICENSE).

---

🙋 Author

Muskan Fatima
GitHub: [@Muskan-Fatimaa](https://github.com/Muskan-Fatimaa)