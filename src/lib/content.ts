import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  body: string;
};

export type Job = {
  company: string;
  position: string;
  year: string;
  description: string;
};

export type IntroData = {
  name: string;
  headline: string;
  bio: string;
};

export type ContactLink = { label: string; href: string };

export type ContactData = {
  heading: string;
  subtitle: string;
  links: ContactLink[];
};

export function getProjects(): Project[] {
  const dir = path.join(contentDir, "projects");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .map((f) => {
      const slug = f.replace(".mdx", "");
      const { data, content } = matter(
        fs.readFileSync(path.join(dir, f), "utf-8")
      );
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        tags: data.tags ?? [],
        image: data.image || undefined,
        url: data.url || undefined,
        body: content.trim(),
      };
    });
}

export function getProject(slug: string): Project | undefined {
  const file = path.join(contentDir, "projects", `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    tags: data.tags ?? [],
    image: data.image || undefined,
    url: data.url || undefined,
    body: content.trim(),
  };
}

export function getIntro(): IntroData {
  const { data } = matter(
    fs.readFileSync(path.join(contentDir, "intro.mdx"), "utf-8")
  );
  return data as IntroData;
}

export function getExperience(): Job[] {
  const { data } = matter(
    fs.readFileSync(path.join(contentDir, "experience.mdx"), "utf-8")
  );
  return (data.jobs ?? []) as Job[];
}

export function getContact(): ContactData {
  const { data } = matter(
    fs.readFileSync(path.join(contentDir, "contact.mdx"), "utf-8")
  );
  return data as ContactData;
}
