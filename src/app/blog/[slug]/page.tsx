import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/blog/post-header";
import { MDXWrapper } from "@/components/blog/mdx-wrapper";
import { Container } from "@/components/layout/container";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Individual blog post page
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content);

  // Find previous and next posts
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <Container>
      <article className="py-12">
        <PostHeader post={post} />
        <MDXWrapper>
          <MDXRemote {...mdxSource} />
        </MDXWrapper>
        {(previousPost || nextPost) && (
          <nav className="mt-12 flex justify-between border-t border-gray-800 pt-8">
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="text-gray-400 transition-colors hover:text-gray-100"
              >
                <span className="text-sm">← Previous</span>
                <div className="font-medium">{previousPost.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="text-right text-gray-400 transition-colors hover:text-gray-100"
              >
                <span className="text-sm">Next →</span>
                <div className="font-medium">{nextPost.title}</div>
              </Link>
            )}
          </nav>
        )}
      </article>
    </Container>
  );
}

