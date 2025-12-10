import { Container } from "@/components/layout/container";

interface LinkItem {
  label: string;
  description: string;
  url: string;
  icon?: string;
}

/**
 * Links page displaying external links and profiles
 */
export default function LinksPage() {
  const links: LinkItem[] = [
    {
      label: "GitHub",
      description: "View my open-source projects and contributions",
      url: "https://github.com/yourusername",
    },
    {
      label: "Medium",
      description: "Read my articles and blog posts",
      url: "https://medium.com/@yourusername",
    },
    {
      label: "App Store",
      description: "Check out my apps on the Apple App Store",
      url: "https://apps.apple.com/developer/yourname",
    },
    {
      label: "LinkedIn",
      description: "Connect with me on LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
  ];

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Links
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Find me on these platforms and services.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-300">
                {link.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {link.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{new URL(link.url).hostname}</span>
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}

