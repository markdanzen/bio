import styles from "./Contact.module.scss";
import { getContact } from "@/lib/content";

export default function Contact() {
  const contact = getContact();

  return (
    <section id="contact" className={styles.contact}>
      <h2>{contact.heading}</h2>
      <p className={styles.subtitle}>{contact.subtitle}</p>
      <div className={styles.links}>
        {contact.links.map((link) => (
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
