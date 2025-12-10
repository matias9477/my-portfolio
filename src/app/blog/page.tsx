import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/layout/container";

/**
 * Blog index page displaying all blog posts
 */
export default function BlogPage() {
  const posts = getAllPosts();
  const [articles, snippets] = posts.reduce(
    (acc, post) => {
      if (post.kind === "article") {
        acc[0].push(post);
      } else {
        acc[1].push(post);
      }
      return acc;
    },
    [[], []] as [typeof posts, typeof posts]
  );

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Articles and snippets about development, design, and more.
        </p>

        {posts.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

