import styles from "./Skills.module.scss";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "CSS/Sass"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "CI/CD", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <p className={styles.subtitle}>
        Replace this list with the technologies and tools you actually use.
      </p>
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3>{group.category}</h3>
            <ul className={styles.pills}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
