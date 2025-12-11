import { getAllPosts } from "@/lib/posts";
import { getFeaturedProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/blog/post-card";
import { ProjectCard } from "@/components/projects/project-card";
import { MediumFeed } from "@/components/medium-feed";
import { Container } from "@/components/layout/container";

/**
 * Home page with hero, latest blog posts, featured projects, and Medium feed
 */
export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 5);
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-gray-800 bg-black py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-100 sm:text-6xl">
              Matias Turra
            </h1>
            <p className="mb-2 text-2xl font-semibold text-gray-300">
              Lead UI Engineer
            </p>
            <p className="mb-8 text-lg text-gray-400">
              Building beautiful, performant, and accessible web and mobile
              applications with modern technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/blog" variant="primary">
                My Blog
              </Button>
              <Button href="/projects" variant="outline">
                My Projects
              </Button>
              <Button href="/cv.pdf" variant="secondary" external>
                Download my CV
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="border-b border-gray-800 bg-black py-16">
          <Container>
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-gray-100">
                Featured Projects
              </h2>
              <p className="text-gray-400">
                Highlighted projects and applications I&apos;ve built.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button href="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="border-b border-gray-800 bg-black py-16">
          <Container>
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-gray-100">
                Latest Blog Posts
              </h2>
              <p className="text-gray-400">
                Recent articles and snippets from my blog.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button href="/blog" variant="outline">
                View All Posts
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Medium Posts */}
      <section className="border-b border-gray-800 bg-black py-16">
        <Container>
          <MediumFeed
            showTitle={true}
            showReadAllLink={true}
            mediumProfileUrl="https://medium.com/@matias.turra"
          />
        </Container>
      </section>
    </div>
  );
}
