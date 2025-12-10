import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { type BlogPost } from "@/lib/posts";

interface PostHeaderProps {
  post: BlogPost;
}

/**
 * Header component for individual blog post pages
 * @param post - Blog post data
 */
export const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <header className="mb-8">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>
      <div className="mb-4 flex items-center gap-3">
        <Badge variant="outline">{post.kind}</Badge>
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(post.date)}
        </time>
      </div>
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
};

