export type Project = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  tags: string[];
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    detail:
      "A longer write-up of Project One: the problem it solves, the approach taken, and the tradeoffs made along the way. Swap this out for real project details.",
    tags: ["Next.js", "TypeScript"],
    url: "https://example.com",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    detail:
      "A longer write-up of Project Two: the problem it solves, the approach taken, and the tradeoffs made along the way. Swap this out for real project details.",
    tags: ["React", "Node.js"],
    url: "https://example.com",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    detail:
      "A longer write-up of Project Three: the problem it solves, the approach taken, and the tradeoffs made along the way. Swap this out for real project details.",
    tags: ["PostgreSQL", "GraphQL"],
    url: "https://example.com",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
