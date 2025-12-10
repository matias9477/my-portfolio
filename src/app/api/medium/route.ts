import { NextResponse } from "next/server";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

/**
 * API route to fetch Medium RSS feed
 * Replace the RSS_URL with your actual Medium RSS feed URL
 */
export async function GET() {
  try {
    const RSS_URL = "https://medium.com/feed/@matias.turra";

    const response = await fetch(RSS_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Medium RSS");
    }

    const xml = await response.text();
    const posts: MediumPost[] = [];

    // Simple XML parsing (you might want to use a proper RSS parser)
    const titleMatches = xml.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>/g);
    const linkMatches = xml.matchAll(/<link>(.*?)<\/link>/g);
    const dateMatches = xml.matchAll(/<pubDate>(.*?)<\/pubDate>/g);

    const titles = Array.from(titleMatches).map((m) => m[1]);
    const links = Array.from(linkMatches).map((m) => m[1]);
    const dates = Array.from(dateMatches).map((m) => m[1]);

    // Skip the first title (usually the feed title)
    for (let i = 1; i < titles.length && i < links.length && i < dates.length; i++) {
      posts.push({
        title: titles[i] || "",
        link: links[i] || "",
        pubDate: dates[i] || "",
      });
    }

    return NextResponse.json({ posts: posts.slice(0, 5) });
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    return NextResponse.json({ posts: [] });
  }
}

