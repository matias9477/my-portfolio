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

    // Parse RSS feed by extracting items
    // Medium RSS has items wrapped in <item> tags
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = Array.from(xml.matchAll(itemRegex));

    for (const itemMatch of items) {
      const itemContent = itemMatch[1];
      
      // Extract title (can be CDATA or plain)
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const title = titleMatch ? (titleMatch[1] || titleMatch[2] || "").trim() : "";
      
      // Extract link (should be within the item)
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const link = linkMatch ? (linkMatch[1] || "").trim() : "";
      
      // Extract pubDate
      const dateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const pubDate = dateMatch ? (dateMatch[1] || "").trim() : "";

      if (title && link && pubDate) {
        posts.push({
          title,
          link,
          pubDate,
        });
      }
    }

    return NextResponse.json({ posts: posts.slice(0, 5) });
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    return NextResponse.json({ posts: [] });
  }
}

