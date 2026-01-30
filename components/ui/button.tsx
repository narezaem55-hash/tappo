import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const variants: Record<string, string> = {
    default: "bg-black text-white hover:bg-black/90 disabled:bg-black/40",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 disabled:bg-zinc-100/50",
    outline: "border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 disabled:opacity-50",
    ghost: "bg-transparent hover:bg-zinc-100 text-zinc-900 disabled:opacity-50",
  };

  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-sm rounded-xl",
    md: "h-10 px-4 text-sm rounded-2xl",
    lg: "h-12 px-5 text-base rounded-2xl",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-black/20",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
