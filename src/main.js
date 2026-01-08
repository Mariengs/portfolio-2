import "./styles/global.css";
import { createProjectCard } from "./components/ProjectCard.js";

const projects = [
  {
    id: "css-frameworks",
    title: "CSS Frameworks",
    description:
      "Styled an existing JS2 project using Tailwind, creating responsive pages with modern UI patterns and clean component structure",
    image: "/images/cssimg.webp",
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
      "An interactive front-end auction platform built with vanilla JavaScript and Tailwind CSS, featuring user authentication, live bidding, and responsive design.",
    image: "/images/SP2img.webp",
    imageAlt: "Screenshot of the Semester Project 2 site",
    href: "/projects/semester-project-2.html",
  },
  {
    id: "project-exam-2",
    title: "Project Exam 2",
    description:
      "Holidaze is a modern booking platform built with React and TypeScript, allowing users to browse venues, manage bookings, and handle listings through a role-based interface.",
    image: "/images/holidaze.ss.webp",
    imageAlt: "Screenshot of the Project Exam 2 site",
    href: "/projects/project-exam-2.html",
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
