import { type ReactNode } from "react";

interface MDXWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component for MDX content with typography styling
 * @param children - MDX content
 */
export const MDXWrapper = ({ children }: MDXWrapperProps) => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-gray-900 dark:prose-a:text-gray-100 prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900">
      {children}
    </div>
  );
};

