import styles from "./Contact.module.scss";

const links = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p className={styles.subtitle}>
        Replace these placeholder links with your real email and profiles.
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
