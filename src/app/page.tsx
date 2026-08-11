import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ThemeSwitch from "@/components/ThemeSwitch";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <main className={styles.main}>
        <Intro />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ThemeSwitch />
    </div>
  );
}
