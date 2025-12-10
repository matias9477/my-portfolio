import { Container } from "./container";

/**
 * Site footer component
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <Container>
        <div className="py-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

