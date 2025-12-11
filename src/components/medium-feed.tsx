"use client";

import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

interface MediumFeedProps {
  showTitle?: boolean;
  showReadAllLink?: boolean;
  mediumProfileUrl?: string;
}

/**
 * Component that fetches and displays recent Medium posts from RSS feed
 * @param showTitle - Whether to show a section title
 * @param showReadAllLink - Whether to show a "Read All My Articles" link
 * @param mediumProfileUrl - URL to the Medium profile
 */
export const MediumFeed = ({
  showTitle = false,
  showReadAllLink = false,
  mediumProfileUrl = "https://medium.com/@matias.turra",
}: MediumFeedProps) => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
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
        <p className="text-gray-400">Loading Medium posts...</p>
      </div>
    );
  }

  if (error) {
    return null; // Silently fail if there's an error
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      {showTitle && (
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-100">
            Medium Articles
          </h2>
          <p className="text-gray-400">
            Recent articles I&apos;ve published on Medium.
          </p>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-gray-800 bg-gray-900 p-6 transition-all hover:border-gray-700 hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="outline">medium</Badge>
              <time className="text-sm text-gray-400">
                {formatDate(post.pubDate)}
              </time>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-100 group-hover:text-gray-300">
              {post.title}
            </h3>
          </a>
        ))}
      </div>
      {showReadAllLink && (
        <div className="mt-8 text-center">
          <Button href={mediumProfileUrl} variant="outline" external>
            Read All My Articles
          </Button>
        </div>
      )}
    </>
  );
};
