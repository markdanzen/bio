import styles from "./Experience.module.scss";

const experience = [
  {
    company: "Wellevate Ltd.",
    position: "WordPress Developer",
    year: "Mar 2025 — Jan 2026",
    description:
      "",
  },
  {
    company: "Sonnet Digital",
    position: "WordPress Developer",
    year: "Sep 2022 — Feb 2025",
    description:
      "",
  },
  {
    company: "Starfish Web Design",
    position: "Web Developer",
    year: "Nov 2016 — Aug 2022",
    description:
      "",
  },
  {
    company: "Incubix Technologies",
    position: "Junior Web Developer",
    year: "Oct 2015 — Nov 2016",
    description:
      "",
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Work Experience</h2>
      <div className={styles.list}>
        {experience.map((role, index) => (
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
