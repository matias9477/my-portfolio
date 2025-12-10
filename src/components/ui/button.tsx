import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

/**
 * Reusable button component with multiple variants
 * @param children - Button content
 * @param href - Optional link URL
 * @param onClick - Optional click handler
 * @param variant - Button style variant
 * @param className - Additional CSS classes
 * @param external - Whether the link is external
 */
export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-200 focus:ring-white",
    secondary:
      "bg-gray-800 text-gray-100 hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "border-2 border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-500",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

