import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Avatar from "@/components/Avatar";
import { getProject, getProjects } from "@/lib/content";
import pageStyles from "../../page.module.scss";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
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
    <div id="swup" className={pageStyles.page}>
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
          <div className={styles.banner}>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 680px"
              />
            ) : (
              <Avatar seed={project.slug} size={680} radius={0} fill />
            )}
          </div>
          <div className={styles.description}>
            <MDXRemote source={project.body} />
          </div>
          {project.url && (
            <div className={styles.links}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </a>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
