import type { MDXComponents } from "mdx/types";
import { type ReactNode } from "react";

/**
 * Custom MDX components for rendering MDX content
 * These components override the default HTML elements in MDX files
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize heading styles
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="mb-4 mt-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="mb-3 mt-6 text-3xl font-semibold text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="mb-2 mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {children}
      </h3>
    ),
    // Customize paragraph styles
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-4 text-gray-700 dark:text-gray-300">{children}</p>
    ),
    // Customize link styles
    a: ({ href, children }: { href?: string; children: ReactNode }) => (
      <a
        href={href}
        className="text-gray-900 underline hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    // Customize code block styles
    code: ({ children }: { children: ReactNode }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        {children}
      </code>
    ),
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
        {children}
      </pre>
    ),
    // Customize list styles
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="text-gray-700 dark:text-gray-300">{children}</li>
    ),
    // Customize blockquote styles
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="mb-4 border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:border-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    // Pass through other components
    ...components,
  };
}

