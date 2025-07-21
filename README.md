# PantryNotes 📝🍳

A beautiful, personal recipe website built with React and Tailwind CSS. Keep track of your favorite recipes, ingredients, and cooking notes in a clean, journal-inspired interface.

## ✨ Features

- **Recipe Collection**: Browse all your recipes in a clean grid layout
- **Smart Search**: Search by recipe name, ingredients, or description
- **Tag Filtering**: Filter recipes by tags (vegan, quick, dinner, etc.)
- **Detailed Recipe View**: Complete ingredient lists and step-by-step instructions
- **Mobile Responsive**: Perfect for use in the kitchen on any device
- **GitHub Pages Ready**: Static site deployment with clean routing

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pantrynotes.git
   cd pantrynotes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see your recipe collection!

## 📖 Adding Recipes

Currently, recipes are stored in `src/data/recipes.json`. To add a new recipe:

1. Open `src/data/recipes.json`
2. Add your recipe following this format:

```json
{
  "id": 6,
  "title": "Your Recipe Name",
  "description": "A brief description of your recipe",
  "tags": ["tag1", "tag2", "tag3"],
  "cookTime": "30 minutes",
  "servings": 4,
  "ingredients": [
    "Ingredient 1",
    "Ingredient 2",
    "..."
  ],
  "instructions": [
    "Step 1 instructions",
    "Step 2 instructions",
    "..."
  ],
  "notes": "Optional cooking tips or notes"
}
```

## 🎨 Customization

### Colors
The site uses a custom "journal" color palette defined in `tailwind.config.js`. You can customize these colors to match your preferences.

### Fonts
The default font is Georgia (serif) for a classic, readable journal aesthetic. Change this in `src/index.css`.

## 🚀 Deployment to GitHub Pages

1. **Update the repository URL** in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/pantrynotes"
   ```

2. **Update the base path** in `vite.config.js` if needed:
   ```js
   base: '/pantrynotes/'
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** in your repository settings and point to the `gh-pages` branch.

### Custom Domain Setup

If you have a custom domain (like `pantrynotes.com`):

1. Update the `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `base` path in `vite.config.js` to `'/'`

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing (HashRouter for GitHub Pages)
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons

## 📱 Mobile Experience

PantryNotes is designed to work beautifully on mobile devices. The responsive design ensures you can easily browse recipes while cooking in the kitchen.

## 🔮 Future Features

- [ ] Recipe form for adding new recipes through the UI
- [ ] Recipe editing functionality
- [ ] Recipe categories/collections
- [ ] Print-friendly recipe layouts
- [ ] Recipe sharing functionality
- [ ] Dark mode toggle
- [ ] Recipe ratings and favorites

## 🤝 Contributing

This is a personal project, but feel free to fork it and customize it for your own recipe collection!

## 📄 License

MIT License - feel free to use this for your own recipe collection.

---

**Happy Cooking!** 👨‍🍳👩‍🍳 