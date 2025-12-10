import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { type BlogPost } from "@/lib/posts";

interface PostCardProps {
  post: BlogPost;
}

/**
 * Card component for displaying a blog post preview
 * @param post - Blog post data
 */
export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-gray-800 bg-gray-900 p-6 transition-all hover:border-gray-700 hover:shadow-md"
    >
      <div className="mb-3 flex items-center gap-3">
        <Badge variant="outline">{post.kind}</Badge>
        <time className="text-sm text-gray-400">
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-100 group-hover:text-gray-300">
        {post.title}
      </h3>
      <p className="mb-4 text-gray-400">{post.summary}</p>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  );
};

