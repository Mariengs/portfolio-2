import styles from "./ProjectCard.module.css";

export function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = styles.card;

  const link = document.createElement("a");
  link.className = styles.link;
  link.href = project.href;

  const img = document.createElement("img");
  img.className = styles.thumbnail;
  img.src = project.image;
  img.alt = project.imageAlt || `${project.title} project thumbnail`;
  img.loading = "lazy";

  const title = document.createElement("h2");
  title.className = styles.title;
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = styles.description;
  description.textContent = project.description;

  const readMore = document.createElement("span");
  readMore.className = styles.readMore;
  readMore.textContent = "Read more →";

  link.appendChild(img);
  link.appendChild(title);
  link.appendChild(description);
  link.appendChild(readMore);

  card.appendChild(link);

  return card;
}
