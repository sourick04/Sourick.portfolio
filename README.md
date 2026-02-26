# Sourick Banerjee — Portfolio Website

A modern, fully responsive personal portfolio built with **React + Vite**.

## ✨ Features

- 🌗 Dark / Light mode toggle (persisted in localStorage)
- ⌨️ Typing animation in the Hero section
- 🔍 Project filter by technology
- 📱 Mobile-first responsive design
- 🎨 CSS Modules for scoped styling
- 📝 Contact form with client-side validation
- ♿ Semantic HTML and accessible markup
- ⚡ Production-ready, lightweight (no heavy dependencies)

---

## 📁 Folder Structure

```
sourick-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Education.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Involvement.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── data/
│   │   └── resumeData.js   ← UPDATE THIS FILE to change content
│   ├── App.jsx
│   ├── index.css           ← Global styles + CSS variables
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed

### Installation

```bash
# 1. Navigate to the project folder
cd sourick-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# Output goes to the /dist folder
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔧 Customization

**All personal content** lives in one file:

```
src/data/resumeData.js
```

Update your name, bio, skills, projects, etc. there and the entire site updates automatically.

**To add a real resume download**, replace the `resumeUrl` value in `resumeData.js` with the URL to your hosted PDF.

**To enable real email sending**, replace the `mailto:` logic in `Contact.jsx` with [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/).

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploy.

### Netlify
```bash
npm run build
# Drag & drop the /dist folder at netlify.com/drop
```
Or connect GitHub for CI/CD.

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
#   "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| CSS Modules | Scoped styling |
| Google Fonts | Typography (Playfair Display + DM Sans) |

---

© 2024 Sourick Banerjee
