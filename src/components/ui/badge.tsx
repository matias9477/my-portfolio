import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

/**
 * Badge component for displaying tags, labels, or status indicators
 * @param children - Badge content
 * @param variant - Badge style variant
 * @param className - Additional CSS classes
 */
export const Badge = ({
  children,
  variant = "default",
  className,
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";

  const variants = {
    default:
      "bg-gray-800 text-gray-200",
    secondary:
      "bg-gray-700 text-gray-100",
    outline:
      "border border-gray-600 text-gray-300",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};

