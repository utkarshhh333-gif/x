import type { Metadata } from "next";
import { Compass, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About - Utkarsh",
  description:
    "Agency positioning, process, and philosophy for Utkarsh, a boutique web and AI systems studio.",
};

const philosophy = [
  {
    icon: Gauge,
    title: "Speed is a brand signal",
    text: "A premium site should feel immediate. Performance is treated as part of the experience, not a cleanup task after design.",
  },
  {
    icon: ShieldCheck,
    title: "Trust beats spectacle",
    text: "The visual system stays calm, structured, and business-ready so the work feels credible to serious decision makers.",
  },
  {
    icon: Sparkles,
    title: "AI should earn its place",
    text: "AI is used where it improves response quality, clarity, or workflow speed. It is not added as decoration.",
  },
  {
    icon: Compass,
    title: "Systems over pages",
    text: "The goal is not only a beautiful screen. The goal is a digital system that captures, routes, assists, and supports real business work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About"
          title="A compact studio for premium web and AI systems."
          description="Utkarsh is positioned for businesses that need modern execution without agency bloat: clean strategy, refined interface design, fast development, and practical integration thinking."
          aside={
            <div className="premium-panel rounded-[2rem] p-6">
              <p className="text-sm text-zinc-500">Studio stance</p>
              <p className="mt-4 text-3xl font-semibold text-zinc-50">
                Calm interfaces. Useful automation. Systems that feel built, not assembled.
              </p>
            </div>
          }
        />

        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Positioning
              </p>
              <h2 className="mt-5 text-4xl font-semibold text-zinc-50">
                Built for companies that want clarity before complexity.
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Utkarsh builds websites, automation workflows, AI integrations, and
                business interfaces for teams that care about speed, presentation,
                and operational usefulness.
              </p>
              <p>
                The agency direction is intentionally focused. Instead of offering
                every possible digital service, Utkarsh concentrates on the layer where
                modern businesses most often leak opportunity: slow websites,
                poor inquiry handling, repeated manual tasks, and disconnected
                customer touchpoints.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={item.title}
                  delay={index * 0.06}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
                >
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h2 className="mt-7 text-2xl font-semibold text-zinc-50">
                    {item.title}
                  </h2>
                  <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                  Working style
                </p>
                <h2 className="mt-5 text-4xl font-semibold text-zinc-50">
                  A senior, structured process without unnecessary ceremony.
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  "Start with the business bottleneck, not the trend.",
                  "Design the user journey before choosing tools.",
                  "Build static-first when the project does not need a backend.",
                  "Make content, interactions, and integration paths easy to replace later.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/20 p-5 text-zinc-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition"
            >
              Start a Conversation
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
