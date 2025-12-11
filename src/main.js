import "./styles/global.css";
import { createProjectCard } from "./components/ProjectCard.js";

const projects = [
  {
    id: "css-frameworks",
    title: "CSS Frameworks",
    description:
      "Styled an existing JS2 project using Tailwind, creating responsive pages with modern UI patterns and clean component structure",
    image: "/images/css-frameworks.webp",
    imageAlt: "Screenshot of the CSS Frameworks project",
    href: "/projects/css-frameworks.html",
  },
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    description:
      "Built a React-based eCom store with dynamic routing, product search, cart functionality, and a complete checkout flow.",
    image: "/images/jsf-25.webp",
    imageAlt: "Screenshot of the JavaScript Frameworks project",
    href: "/projects/js-frameworks.html",
  },
  {
    id: "semester-project-2",
    title: "Semester Project 2",
    description:
      "A full front-end project combining design, architecture and real-world API integration.",
    image: "/images/semester-project-2.webp",
    imageAlt: "Screenshot of the Semester Project 2 site",
    href: "/projects/semester-project-2.html",
  },
];

function renderProjects() {
  const container = document.getElementById("projects");
  if (!container) return;

  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

renderProjects();
setYear();
