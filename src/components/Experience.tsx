import styles from "./Experience.module.scss";
import { getExperience } from "@/lib/content";

export default function Experience() {
  const jobs = getExperience();

  return (
    <section id="experience" className={styles.experience}>
      <h2>Work Experience</h2>
      <div className={styles.list}>
        {jobs.map((role, index) => (
          <article key={index} className={styles.item}>
            <div className={styles.heading}>
              <h3>{role.company}</h3>
              <span className={styles.year}>{role.year}</span>
            </div>
            <p className={styles.position}>{role.position}</p>
            <p className={styles.description}>{role.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
