import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const baseClass =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow disabled:cursor-not-allowed disabled:opacity-60";

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-orange text-white hover:bg-brand-orange-light",
  secondary: "bg-brand-yellow text-brand-black hover:bg-yellow-400",
  ghost: "bg-transparent border border-zinc-600 text-white hover:border-brand-yellow hover:text-brand-yellow",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={`${baseClass} ${variantClass[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
