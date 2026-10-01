import Image from "next/image";
import Avatar from "./Avatar";
import styles from "./Projects.module.scss";
import { projects } from "@/lib/projects";

const INITIAL_COUNT = 2;

// "See more" is wired up by a document-level listener in SwupProvider rather
// than React state: Swup swaps this section in as plain HTML, so React handlers
// here would be lost after navigating back.
export default function Projects() {
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.subtitle}>
        A collection of projects I have worked on, with personal projects coming soon.
      </p>
      <div
        id="project-list"
        className={styles.list}
        data-collapsed={hasMore || undefined}
      >
        {projects.map((project, i) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
            data-extra={i >= INITIAL_COUNT || undefined}
          >
            <div className={styles.media}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 280px"
                />
              ) : (
                <Avatar seed={project.slug} size={280} radius={0} fill />
              )}
            </div>
            <div className={styles.body}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className={styles.more}>View details →</span>
            </div>
          </a>
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          className={styles.seeMore}
          data-see-more
          aria-controls="project-list"
          aria-expanded="false"
        >
          See more
        </button>
      )}
    </section>
  );
}
