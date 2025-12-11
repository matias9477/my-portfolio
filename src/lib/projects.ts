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
  architecture?: string; // Architecture of the project
  links: ProjectLink[];
  featured?: boolean; // Whether the project should be featured on the home page
}

/**
 * Array of portfolio projects
 */
export const projects: Project[] = [
  {
    id: "dataguard",
    name: "DataGuard",
    role: "Lead UI Engineer",
    description:
      "A data posture security management product to help organizations secure their data. Since 2023 I've been leading the UI team. I've had to build multiple features from scratch, including role-based authentication and multiple dashboards.",
    techStack: ["React", "TypeScript", "Material UI", "GraphQL", "CI/CD"],
    architecture: "Monorepo with a backend-for-frontend architecture",
    links: [
      { type: "demo", url: "https://www.symmetry-systems.com/getstarted/" },
      {
        type: "website",
        url: "https://www.symmetry-systems.com/product/?utm_term=dspm&utm_campaign=Q3_2023_Data+Security+Posture+Management_Search&utm_source=adwords&utm_medium=ppc&hsa_acc=2960355915&hsa_cam=20609986224&hsa_grp=159933235131&hsa_ad=675943891410&hsa_src=g&hsa_tgt=kwd-336683436884&hsa_kw=dspm&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20609986224&gbraid=0AAAAApWezQUVlWbOnYWQb7Elm7WVQYtz1&gclid=Cj0KCQiA9OnJBhD-ARIsAPV51xMkFtHz9UyywHKITZXpC6gHdxppxTSo_rUpXbZyzxr1FVbRHB-wMY4aAgkIEALw_wcB",
      },
    ],
    featured: true,
  },
  {
    id: "since-app",
    name: "Since",
    role: "Developer",
    description:
      "I developed from scratch a modern mobile application to track how long it's been since a specific event. From idea to app store release in 1 week.",
    techStack: ["React Native", "TypeScript", "Expo", "SQLite", "Drizzle"],
    architecture: "Local-first mobile app",
    links: [
      { type: "github", url: "https://github.com/matias9477/since" },
      {
        type: "appstore",
        url: "https://apps.apple.com/us/app/since-how-long-its-been/id6755636803",
      },
    ],
    featured: true,
  },
  {
    id: "consistency-app",
    name: "Consistency",
    role: "Developer",
    description:
      "I was having some issues trying to build some habits so I developed Consistency. A modern mobile application to help you stay on track with your habits.",
    techStack: ["React Native", "TypeScript", "Expo", "SQLite", "Drizzle"],
    architecture: "Local-first mobile app",
    links: [
      { type: "github", url: "https://github.com/matias9477/habit-tracker" },
      {
        type: "appstore",
        url: "https://apps.apple.com/us/app/consistency-stay-on-track/id6748652695",
      },
    ],
    featured: true,
  },
  {
    id: "leloir",
    name: "Leloir",
    role: "Engineer and Scrum Master",
    description:
      "Leloir was my engineering thesis at the Universidad Tecnológica Nacional. We developed a platform to manage an analysis laboratory, including blood samples, results, and more.",
    techStack: ["React", "Redux", "Java", "Spring Boot", "MySQL"],
    architecture: "MVC ",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/matias9477/leloir-frontend-react",
      },
    ],
  },
  {
    id: "abac",
    name: "ABAC Permission Handling",
    role: "Developer",
    description:
      "After implementing RBAC at Symmetry Systems, I created a library to handle ABAC permission handling. When RBAC is not enough, ABAC is the solution.",
    techStack: ["TypeScript"],
    links: [
      {
        type: "github",
        url: "https://github.com/matias9477/abac-permission-handling",
      },
    ],
  },
  {
    id: "check-titulo-utn",
    name: "Check Titulo UTN",
    role: "Developer",
    description:
      "I was tired of checking the status of my title manually so I created a script to check it automatically and notify me when it's ready.",
    techStack: ["Javascript", "Node.js", "Puppeteer"],
    links: [
      { type: "github", url: "https://github.com/matias9477/check-titulo-utn" },
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
