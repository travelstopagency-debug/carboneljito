import { PropsWithChildren } from "react";

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-full border border-brand-yellow bg-brand-black/70 px-3 py-1 text-xs font-semibold text-brand-yellow">
      {children}
    </span>
  );
}
