import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

/**
 * About page with bio, career timeline, and skills
 */
export default function AboutPage() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "GraphQL",
    "React Native",
    "JavaScript",
    ".NET",
    "Node.js",
    "LaunchDarkly",
    "Jira",
    "Git",
    "Figma",
  ];

  const timeline = [
    {
      period: "Oct 2023 - Present",
      company: "Symmetry Systems",
      location: "San Francisco, USA",
      role: "Lead UI Engineer",
      highlights: [
        "Managed the UI team for DataGuard, a data posture security management product, balancing workloads, prioritizing tasks, and creating and tracking tickets",
        "Oversaw weekly releases of the latest UI version to customers including Lowe's, Mattel, and NASA",
        "Collaborated closely with UX and backend teams to create user-friendly interfaces for new features",
        "Implemented multiple features from scratch, including role-based authentication",
      ],
    },
    {
      period: "Jun 2022 - Oct 2023",
      company: "Symmetry Systems",
      location: "San Francisco, USA",
      role: "UI Engineer",
      highlights: [
        "Collaborated with UX team to develop user-friendly features for DataGuard using React.js",
        "Maintained GraphQL server by updating schema and writing resolvers to connect frontend and backend APIs",
        "Fixed bugs based on feedback from customers and customer success team",
        "Managed feature rollouts for DataGuard using LaunchDarkly",
      ],
    },
    {
      period: "Apr 2022 - Jun 2022",
      company: "Periodic SL",
      location: "Tenerife, Spain",
      role: "Frontend Engineer",
      highlights: [
        "Implemented features and fixed bugs for Sugar, a dating app, in its early stages",
        "Transformed Figma designs from the design team into functional user interfaces using Next.js",
        "Managed tasks to deliver quality results on time",
      ],
    },
    {
      period: "Sep 2020 - Mar 2022",
      company: "Netpossible LLC",
      location: "Córdoba, Argentina",
      role: "Fullstack Engineer",
      highlights: [
        "Utilized .NET stack for redesigning and implementing UI interfaces, developing backend features, and architecting the data layer",
        "Served as Scrum Master, managing team tasks using Jira and leading sprint planning",
        "Successfully implemented Gitflow to standardize the development process and improve collaboration",
      ],
    },
  ];

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-100">
          About Me
        </h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-100">
            Bio
          </h2>
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-gray-300">
              I'm a Lead UI Engineer based in Córdoba, Argentina, with a passion
              for building beautiful, performant, and accessible web and mobile
              applications. Currently leading the UI team at Symmetry Systems,
              where I work on DataGuard, a data posture security management
              product used by major companies including Lowe's, Mattel, and NASA.
            </p>
            <p className="text-gray-300">
              With experience spanning from fullstack development to UI
              leadership, I specialize in React, TypeScript, Next.js, and GraphQL.
              I enjoy collaborating with UX and backend teams to create
              user-friendly interfaces and implementing features from scratch.
              When I'm not coding, you can find me writing about development on
              Medium or contributing to open-source projects.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-100">
            Where I've Worked
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-800" />
                <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1.5 rounded-full bg-gray-100" />
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-400">
                    {item.period}
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-100">
                  {item.role}
                </h3>
                <p className="mb-1 text-gray-400">
                  {item.company}
                </p>
                <p className="mb-3 text-sm text-gray-500">
                  {item.location}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-gray-300">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-100">
            Education
          </h2>
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-gray-300">
              <strong>Universidad Tecnológica Nacional</strong>
              <br />
              <span className="text-gray-400">
                Córdoba, Argentina
                <br />
                Software Engineering
              </span>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-100">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-100">
            Contact
          </h2>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong>Location:</strong>{" "}
              <span className="text-gray-400">Córdoba, Argentina</span>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:matias.turra@gmail.com"
                className="text-gray-100 underline hover:text-gray-400"
              >
                matias.turra@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/matias9477"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 underline hover:text-gray-400"
              >
                github.com/matias9477
              </a>
            </p>
            <p>
              <strong>Medium:</strong>{" "}
              <a
                href="https://medium.com/@matias.turra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 underline hover:text-gray-400"
              >
                medium.com/@matias.turra
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/matias-turra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 underline hover:text-gray-400"
              >
                linkedin.com/in/matias-turra
              </a>
            </p>
            <p>
              <strong>App Store:</strong>{" "}
              <a
                href="https://apps.apple.com/us/developer/matias-turra/id1826833868"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 underline hover:text-gray-400"
              >
                View my apps
              </a>
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}

