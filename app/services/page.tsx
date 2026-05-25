import type { Metadata } from "next";
import { Bot, CheckCircle2, Code2, Workflow } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services - X",
  description:
    "Website development, AI automation, and AI integration services for modern businesses.",
};

const serviceDetails = [
  {
    icon: Code2,
    title: "Website Development",
    positioning:
      "Premium websites and interfaces built around speed, trust, conversion, and future maintainability.",
    includes: [
      "Landing pages and full business websites",
      "Responsive UI systems for mobile and desktop",
      "Dashboard and portal frontends",
      "SEO metadata and performance foundations",
      "Vercel-ready static architecture",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    positioning:
      "Workflow automation that removes repeated manual steps from lead handling, follow-ups, internal tasks, and operations.",
    includes: [
      "Lead routing and follow-up workflows",
      "CRM-ready automation planning",
      "Internal notifications and handoffs",
      "Business process mapping",
      "Automation logic designed for later scaling",
    ],
  },
  {
    icon: Bot,
    title: "AI Integration",
    positioning:
      "Practical AI built into the places where it can reduce response time, improve clarity, or help teams make better decisions.",
    includes: [
      "AI inquiry qualification flows",
      "Support assistants and knowledge-base guidance",
      "Internal AI assistant concepts",
      "AI summaries and structured outputs",
      "Integration planning for APIs and business tools",
    ],
  },
];

const principles = [
  "No AI gimmicks where a simpler interface solves the problem.",
  "No bloated frontend stack that punishes performance.",
  "No fake analytics-heavy dashboards that look impressive but say nothing.",
  "No lock-in thinking when static-first architecture is enough.",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Focused services for fast, intelligent business systems."
          description="X keeps the service offer deliberately sharp: premium websites, useful automation, and AI integration that improves the actual workflow."
          aside={
            <div className="premium-panel rounded-[2rem] p-6">
              <p className="text-sm text-zinc-500">Service model</p>
              <p className="mt-4 text-3xl font-semibold text-zinc-50">
                Design the system first. Add technology with restraint.
              </p>
            </div>
          }
        />

        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn
                  key={service.title}
                  delay={index * 0.06}
                  className="premium-panel rounded-[2rem] p-6"
                >
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h2 className="mt-7 text-2xl font-semibold text-zinc-50">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-7 text-zinc-400">
                    {service.positioning}
                  </p>
                  <div className="mt-7 grid gap-3">
                    {service.includes.map((item) => (
                      <p key={item} className="flex gap-3 text-sm text-zinc-400">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </p>
                    ))}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                How services combine
              </p>
              <h2 className="mt-5 text-4xl font-semibold text-zinc-50">
                A website can become the front door to a smarter operation.
              </h2>
              <p className="mt-5 leading-8 text-zinc-400">
                The strongest projects usually connect a fast public experience
                with clean intake, automation, and an AI layer that helps teams
                respond with more context.
              </p>
            </FadeIn>
            <FadeIn delay={0.08} className="grid gap-4">
              {[
                "Capture: a premium landing page or site turns visitor intent into structured inquiry data.",
                "Route: automation sends the right information to the right person or business tool.",
                "Assist: AI summarizes context, drafts responses, or qualifies the next step.",
                "Operate: dashboards and internal views make the workflow visible and repeatable.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-accent">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-zinc-400">{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <h2 className="text-3xl font-semibold text-zinc-50">
              What stays out of the work
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5 text-zinc-400"
                >
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition"
            >
              Discuss a Service
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
