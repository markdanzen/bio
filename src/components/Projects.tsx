import styles from "./Projects.module.scss";

const projects = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["PostgreSQL", "GraphQL"],
    demoHref: "#",
    codeHref: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.subtitle}>
        Swap these placeholder cards for your own projects, links, and tags.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <a href={project.demoHref}>Live Demo</a>
              <a href={project.codeHref}>Source Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
