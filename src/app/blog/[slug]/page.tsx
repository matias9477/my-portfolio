import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/blog/post-header";
import { MDXWrapper } from "@/components/blog/mdx-wrapper";
import { Container } from "@/components/layout/container";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type ReactNode } from "react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * MDX components for rendering blog post content
 */
const mdxComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="mb-4 mt-8 text-4xl font-bold text-gray-100">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="mb-3 mt-6 text-3xl font-semibold text-gray-100">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="mb-2 mt-4 text-2xl font-semibold text-gray-100">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="mb-4 text-gray-300">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      className="text-gray-100 underline hover:text-gray-400"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="rounded bg-gray-800 px-1.5 py-0.5 text-sm text-gray-200">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4">
      {children}
    </pre>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-gray-300">{children}</li>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="mb-4 border-l-4 border-gray-600 pl-4 italic text-gray-400">
      {children}
    </blockquote>
  ),
};

/**
 * Individual blog post page
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
          <MDXRemote source={post.content} components={mdxComponents} />
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

