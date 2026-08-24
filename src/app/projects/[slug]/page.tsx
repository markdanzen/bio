import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import pageStyles from "../../page.module.scss";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div id="swup" className={`${pageStyles.page} transition-fade`}>
      <main className={pageStyles.main}>
        <section className={styles.detail}>
          <a href="/" className={styles.back}>
            ← Back to projects
          </a>
          <h1>{project.title}</h1>
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className={styles.description}>{project.detail}</p>
          <div className={styles.links}>
            <a href={project.demoHref}>Live Demo</a>
            <a href={project.codeHref}>Source Code</a>
          </div>
        </section>
      </main>
    </div>
  );
}
