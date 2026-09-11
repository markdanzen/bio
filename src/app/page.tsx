import { headers } from "next/headers";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ThemeSwitch from "@/components/ThemeSwitch";
import HomePreloadCurtain from "@/components/HomePreloadCurtain";
import styles from "./page.module.scss";

export default async function Home() {
  const isSwupVisit = (await headers()).has("x-swup-request");

  return (
    <div id="swup" className={styles.page}>
      {!isSwupVisit && <HomePreloadCurtain />}
      <main className={styles.main}>
        {/* <Intro /> */}
        <Projects />
        {/* <Experience /> */}
        {/* <Contact /> */}
      </main>
      <ThemeSwitch />
    </div>
  );
}
