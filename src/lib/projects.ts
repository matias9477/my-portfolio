export interface ProjectLink {
  type: "github" | "appstore" | "demo" | "website";
  url: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  featured?: boolean;
}

/**
 * Array of portfolio projects
 */
export const projects: Project[] = [
  {
    id: "project-1",
    name: "Example App",
    role: "Lead Developer",
    description: "A modern mobile application built with React Native and TypeScript.",
    techStack: ["React Native", "TypeScript", "GraphQL", "Expo"],
    links: [
      { type: "github", url: "https://github.com/yourusername/example-app" },
      { type: "appstore", url: "https://apps.apple.com/app/example" },
    ],
    featured: true,
  },
  {
    id: "project-2",
    name: "Web Dashboard",
    role: "Frontend Engineer",
    description: "A comprehensive dashboard for data visualization and analytics.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
    links: [
      { type: "github", url: "https://github.com/yourusername/dashboard" },
      { type: "demo", url: "https://dashboard.example.com" },
    ],
    featured: true,
  },
  {
    id: "project-3",
    name: "API Service",
    role: "Full Stack Developer",
    description: "RESTful API service with authentication and real-time features.",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "GraphQL"],
    links: [
      { type: "github", url: "https://github.com/yourusername/api-service" },
      { type: "website", url: "https://api.example.com" },
    ],
  },
];

/**
 * Gets all featured projects
 * @returns Array of featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Gets all projects
 * @returns Array of all projects
 */
export const getAllProjects = (): Project[] => {
  return projects;
};

