import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/layout/container";
import { MediumFeed } from "@/components/medium-feed";

/**
 * Blog index page displaying all blog posts and Medium articles
 */
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-2 text-4xl font-bold text-gray-100">Blog</h1>
        <p className="mb-8 text-lg text-gray-400">
          Here you will find my personal blog posts and my articles on Medium. I
          write about my experiences with software development, design, and
          more.
        </p>

        {posts.length > 0 && (
          <>
            <h2 className="mb-6 text-2xl font-semibold text-gray-100">
              Local Posts
            </h2>
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        <h2 className="mb-6 text-2xl font-semibold text-gray-100">
          Medium Articles
        </h2>
        <MediumFeed
          showReadAllLink={true}
          mediumProfileUrl="https://medium.com/@matias.turra"
        />

        {posts.length === 0 && (
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 text-center">
            <p className="text-gray-400">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </Container>
  );
}
