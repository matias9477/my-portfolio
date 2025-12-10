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
    "Expo",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "Drizzle ORM",
  ];

  const timeline = [
    {
      period: "2023 - Present",
      company: "Your Company",
      role: "Lead UI Engineer",
      highlights: [
        "Leading frontend architecture decisions",
        "Building scalable React applications",
        "Mentoring junior developers",
      ],
    },
    {
      period: "2021 - 2023",
      company: "Previous Company",
      role: "Senior Frontend Developer",
      highlights: [
        "Developed mobile apps with React Native",
        "Improved performance by 40%",
        "Implemented design system",
      ],
    },
  ];

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Bio
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate frontend engineer with a focus on building
              beautiful, performant, and accessible web and mobile applications.
              I love working with modern technologies like React, TypeScript, and
              Next.js to create exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me writing about development,
              contributing to open-source projects, or exploring new
              technologies.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Career Timeline
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />
                <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1.5 rounded-full bg-gray-900 dark:bg-gray-100" />
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.role}
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-400">
                  {item.company}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
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
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-gray-900 underline hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
              >
                your.email@example.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
              >
                github.com/yourusername
              </a>
            </p>
            <p>
              <strong>Medium:</strong>{" "}
              <a
                href="https://medium.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
              >
                medium.com/@yourusername
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
              >
                linkedin.com/in/yourusername
              </a>
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}

