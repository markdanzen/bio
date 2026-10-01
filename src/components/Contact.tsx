import styles from "./Contact.module.scss";

const links = [
  { label: "Email", href: "mailto:markdanzen@gmail.com" },
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "Resume", href: "https://drive.google.com/file/d/1-oXeJa-XUJXGGu2uK0nGQYNeDZMEO4Ae/view?usp=sharing" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Let's Connect</h2>
      <p className={styles.subtitle}>
        Feel free to reach out for work or collaboration.
      </p>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
