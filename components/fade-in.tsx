import type { ComponentPropsWithoutRef } from "react";

type FadeInProps = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  style,
  ...props
}: FadeInProps) {
  return (
    <div
      className={["fade-in", className].filter(Boolean).join(" ")}
      style={{ ...style, animationDelay: `${delay}s` }}
      {...props}
    >
      {children}
    </div>
  );
}
