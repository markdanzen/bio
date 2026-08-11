import Link from "next/link";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h1>Mark Danzen Dela Cruz</h1>
      <h2>Web Developer — Headless CMS, WordPress & Shopify, AI-Assisted Workflows</h2>
      <p>
        Web developer with 10+ years building WordPress, Shopify, and headless CMS solutions — Next.js, Payload CMS, and the infrastructure to ship them reliably. Increasingly using AI to move faster, not to cut corners.
      </p>
      <div className={styles.ctas}>
        <Link className={styles.primary} href="#projects">
          View Projects
        </Link>
        <Link className={styles.secondary} href="#contact">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
