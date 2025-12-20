# Portfolio Website

A clean, modern portfolio website showcasing frontend development projects built during studies at Noroff.

## Features

- Responsive Design: Fully responsive layout that works on all devices
- Project Showcase: Grid-based project cards with hover effects
- Individual Project Pages: Detailed pages for each project with descriptions, tech stacks, and links
- Modern UI: Clean, dark-themed interface with smooth transitions
- Copy Link Functionality: Easy sharing with copy-to-clipboard feature on project pages
- CSS Modules: Scoped styling for maintainable code

## Projects Featured

1. CSS Frameworks - Tailwind CSS implementation
2. JavaScript Frameworks - React eCommerce store
3. Semester Project 2 - Vanilla JS auction platform

## Tech Stack

- Build Tool: Vite 7.2.4
- JavaScript: Vanilla ES6+ modules
- Styling: CSS with CSS Modules
- Version Control: Git

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mariengs/portfolio-2.git
cd portfolio-2
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## Project Structure

```
portfolio-2/
├── src/
│   ├── components/
│   │   ├── ProjectCard.js
│   │   └── ProjectCard.module.css
│   ├── styles/
│   │   └── global.css
│   ├── main.js
│   └── articlePage.js
├── projects/
│   ├── css-frameworks.html
│   ├── js-frameworks.html
│   └── semester-project-2.html
├── images/
├── index.html
├── package.json
└── README.md
```

## Styling

The project uses a combination of:

- Global CSS: Base styles and layout
- CSS Modules: Component-scoped styles for project cards
- Custom Properties: Consistent color scheme and spacing

### Color Palette

- Background: `#050816`
- Primary Text: `#f3f4f6`
- Accent: `#38bdf8`
- Secondary Text: `#9ca3af`

## Responsive Design

The site is fully responsive with breakpoints optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1080px+)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Adding New Projects

1. Add project data to the `projects` array in `main.js`:

```javascript
{
  id: "project-id",
  title: "Project Title",
  description: "Project description",
  image: "/images/project-image.webp",
  imageAlt: "Alt text",
  href: "/projects/project-name.html"
}
```

2. Create a new project detail page in the `projects/` directory
3. Add project image to the `images/` directory

## Deployment

The site is built with Vite and can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Build the project with `npm run build` and deploy the `dist/` folder.

## Author

Marianne Engesvik
