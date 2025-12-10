import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  kind: "article" | "snippet";
  content: string;
}

/**
 * Reads and parses all MDX blog posts from the content directory
 * @returns Array of blog posts sorted by date (newest first)
 */
export const getAllPosts = (): BlogPost[] => {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        summary: data.summary || "",
        tags: data.tags || [],
        kind: data.kind || "article",
        content,
      } as BlogPost;
    })
    .filter((post) => post.title && post.date) // Filter out invalid posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allPostsData;
};

/**
 * Gets a single blog post by slug
 * @param slug - The slug of the post to retrieve
 * @returns The blog post or null if not found
 */
export const getPostBySlug = (slug: string): BlogPost | null => {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      // Try .md extension
      const mdPath = path.join(contentDirectory, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        summary: data.summary || "",
        tags: data.tags || [],
        kind: data.kind || "article",
        content,
      } as BlogPost;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags || [],
      kind: data.kind || "article",
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
};

/**
 * Gets all unique tags from all posts
 * @returns Array of unique tag strings
 */
export const getAllTags = (): string[] => {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

