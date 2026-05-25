import type { ReactNode } from "react";
import { FadeIn } from "@/components/fade-in";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pt-40">
      <div className="absolute left-1/2 top-16 -z-10 h-80 w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:w-[42rem]" />
      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] text-zinc-50 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {description}
          </p>
        </FadeIn>
        {aside ? <FadeIn delay={0.08}>{aside}</FadeIn> : null}
      </div>
    </section>
  );
}
