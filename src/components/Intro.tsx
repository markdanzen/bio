import Link from "next/link";
import Avatar from "./Avatar";
import styles from "./Intro.module.scss";
import { getIntro } from "@/lib/content";

export default function Intro() {
  const intro = getIntro();

  return (
    <section className={styles.intro}>
      <div className={styles.avatar} aria-hidden="true">
        <Avatar seed="studio" size={88} fill />
      </div>
      <h1>{intro.name}</h1>
      <h2>{intro.headline}</h2>
      <p>{intro.bio}</p>
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
