import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/layout/container";

/**
 * Projects page displaying all portfolio projects
 */
export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-2 text-4xl font-bold text-gray-100">
          Projects
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          A collection of projects I've worked on, including apps, websites, and
          open-source contributions.
        </p>

        {projects.length === 0 ? (
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 text-center">
            <p className="text-gray-400">
              No projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

