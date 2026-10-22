# University of Alberta Minecraft Club Website

Official website for the **University of Alberta Minecraft Club** (uofamc.ca).

This website is built with clean, semantic **HTML5**, **CSS3**, and minimal vanilla **JavaScript**. It has **zero build dependencies** and no external build steps (no Node.js, no npm, no bundlers) — making it fast, lightweight, and easy for any club member to edit and maintain.

---

## 📁 Repository Structure

- `index.html`: Home page
- `server-info.html`: Server hardware specs and hosting info
- `faq.html`: Frequently Asked Questions
- `plugins.html`: List of server plugins and commands
- `404.html`: Custom 404 error page
- `css/style.css`: Main stylesheet with CSS variables and reusable classes
- `js/main.js`: Mobile navigation toggle & dropdown script (~50 lines)
- `fonts/`: Minecraft pixel fonts (`MinecraftRegular`, `MinecraftTen`)
- `images/`: Logos, banners, and background graphics

---

## 🚀 How to Preview Locally

You do not need any special tools or servers to test the website on your computer:

### Option 1: Direct File Open
Double-click `index.html` (or any `.html` file) in your file manager to open it directly in your web browser.

### Option 2: Local Python Server (Recommended)
Open your terminal in the repository folder and run:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🛠️ How to Edit Content (Quick Guides)

### 1. Adding a New Plugin (`plugins.html`)

To add a new plugin, open `plugins.html`:

1. **Add to the Table of Contents** (inside `<ul class="toc-grid">`):
   ```html
   <li class="toc-item"><a href="#MyPlugin">My Plugin Name</a></li>
   ```

2. **Add the Plugin Card** (inside `<section class="plugin-list">`):
   ```html
   <article id="MyPlugin" class="plugin-card">
     <header class="plugin-header">
       <h2 class="plugin-name">My Plugin Name</h2>
       <div class="plugin-meta">
         <!-- Use badge-smp, badge-campus, or badge-both -->
         <span class="badge badge-smp">SMP</span>
         <a href="https://spigotmc.org/resources/..." class="plugin-link" target="_blank" rel="noopener">spigotmc.org</a>
       </div>
     </header>
     <div class="plugin-content">
       <p>Describe what the plugin does here. You can highlight commands using <code>/mycommand</code>.</p>
     </div>
   </article>
   ```

### 2. Adding a Question to FAQ (`faq.html`)

Open `faq.html` and locate the appropriate category section (*Rules and Behavior*, *Technical / Gameplay*, or *Verification and Membership*). Insert a new card inside `<div class="faq-list">`:

```html
<article class="faq-card">
  <h3 class="faq-question">Your question here?</h3>
  <p class="faq-answer">Your answer here.</p>
</article>
```

### 3. Updating Server Hardware Specs (`server-info.html`)

Open `server-info.html` and edit the items inside `<ul class="specs-list">`:
```html
<ul class="specs-list">
  <li>Ryzen 9 5950X</li>
  <li>8 GB RAM</li>
  <li>120 GB Storage</li>
</ul>
```

### 4. Updating Map or Discord Links

- **Dynmap links**: Located in the navbar under the *Maps* dropdown in all HTML files:
  - SMP Map: `https://smp7map.uofamc.ca/`
  - Creative Map: `https://campus.uofamc.ca/`
- **Discord Invite**: `https://discord.gg/YsUspx5GPJ`

---

## 🎨 Styling & Theme

All styling is managed in [`css/style.css`](css/style.css) using CSS variables defined at the top:
- `--font-minecraft`: The Minecraft pixel font used for headings and navigation.
- `--font-body`: Clean readable sans-serif font (`PT Sans`) for text and descriptions.
- `--color-link`: Light cyan link color (`#81dbff`).
- `--badge-smp-bg`, `--badge-campus-bg`, `--badge-both-bg`: Colors for server scope pills.

---

## 🌐 Deployment

This site is automatically published via **GitHub Pages** from the `main` branch. Any commit pushed to `main` goes live in seconds.
