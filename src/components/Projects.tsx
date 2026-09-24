import styles from "./Projects.module.scss";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.subtitle}>
        A collection of projects I have worked on, with personal projects coming soon.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className={styles.more}>View details →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
