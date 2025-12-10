import Link from "next/link";
import { Container } from "./container";

/**
 * Site header component with navigation
 */
export const Header = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/links", label: "Links" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-gray-100 transition-colors hover:text-gray-400"
          >
            Portfolio
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden gap-6 sm:flex">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

