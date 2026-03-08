import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "pink" | "blue";
  className?: string;
};

export default function PrimaryButton({ href, children, variant = "pink", className }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-extrabold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg",
        variant === "pink" ? "bg-coral" : "bg-sky",
        className,
      )}
    >
      {children}
      <span className="ml-2" aria-hidden="true">
        ›
      </span>
    </Link>
  );
}
