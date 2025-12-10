"use client";

import { useEffect, useState } from "react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

/**
 * Component that fetches and displays recent Medium posts from RSS feed
 */
export const MediumFeed = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // You'll need to create an API route to fetch Medium RSS
        // For now, this is a placeholder that you can wire up
        const response = await fetch("/api/medium");
        if (!response.ok) {
          throw new Error("Failed to fetch Medium posts");
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-100">
          Medium Posts
        </h2>
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-100">
          Medium Posts
        </h2>
        <p className="text-sm text-gray-400">
          {error}
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-gray-100">
        Medium Posts
      </h2>
      <ul className="space-y-3">
        {posts.slice(0, 3).map((post, index) => (
          <li key={index}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 transition-colors hover:text-gray-100"
            >
              <h3 className="font-medium">{post.title}</h3>
              <time className="text-sm text-gray-400">
                {new Date(post.pubDate).toLocaleDateString()}
              </time>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

