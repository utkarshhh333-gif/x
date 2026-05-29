import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, GitBranch, Layers3 } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work - Utkarsh",
  description:
    "Detailed concept systems and demo projects for premium web systems, AI automation, and AI integration.",
};

const detailedProjects = [
  {
    name: "Real Estate Lead System",
    livePath: "https://dashing-daifuku-0126fe.netlify.app/",
    category: "Lead capture and qualification",
    summary:
      "A concept system for property teams that need faster inquiry capture, cleaner qualification, and clearer handoff from website to sales workflow.",
    challenge:
      "Real estate inquiries often arrive through forms, calls, WhatsApp, and social channels without a single clean intake layer.",
    system:
      "The demo shows a fast landing experience, structured inquiry form, lead scoring logic, CRM-ready fields, and an automation path for follow-up.",
    stack: ["Next.js", "TypeScript", "Forms", "CRM-ready data", "Automation"],
    outcomes: [
      "Cleaner inquiry data before a sales call",
      "Faster routing for urgent property interest",
      "Reduced manual lead sorting",
    ],
  },
  {
    name: "AI Support Website",
    livePath: null,
    category: "Support experience and knowledge flow",
    summary:
      "A practical AI support concept for businesses that want customers to find answers without turning the site into a noisy chatbot gimmick.",
    challenge:
      "Support content is usually fragmented across FAQs, docs, emails, and repeated manual responses.",
    system:
      "The concept combines a premium support interface, searchable knowledge sections, escalation prompts, and AI-assisted answer drafting.",
    stack: ["Next.js", "AI API-ready", "Knowledge base", "Support UX", "Analytics hooks"],
    outcomes: [
      "Clearer self-serve support path",
      "Better prepared customer questions",
      "Less repetitive manual response work",
    ],
  },
  {
    name: "Business Automation Dashboard",
    livePath: null,
    category: "Internal operations interface",
    summary:
      "A dashboard concept for tracking repeated operations, task status, handoffs, and automation health in a calm internal tool.",
    challenge:
      "Teams lose operational clarity when recurring tasks live inside spreadsheets, chats, and memory.",
    system:
      "The interface organizes workflows, owners, status, recent events, and automation checkpoints without fake analytics clutter.",
    stack: ["Dashboard UI", "Workflow mapping", "REST API-ready", "Automation", "Role views"],
    outcomes: [
      "Better visibility across repeated work",
      "Cleaner handoffs between team members",
      "A scalable foundation for future tools",
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Work"
          title="Concept systems designed like real products."
          description="The work page goes deeper than a thumbnail grid. Each project is framed around the business problem, the system design, and the practical outcome it is meant to create."
          aside={
            <div className="premium-panel rounded-[2rem] p-6">
              <GitBranch className="h-6 w-6 text-accent" aria-hidden="true" />
              <p className="mt-6 text-2xl font-semibold text-zinc-50">
                Demo systems, not fake clients.
              </p>
              <p className="mt-3 leading-7 text-zinc-400">
                These are concept builds and system studies that show the agency
                direction without pretending to have client case results.
              </p>
            </div>
          }
        />

        <section className="px-5 py-12 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn
                key={project.title}
                delay={index * 0.06}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
              >
                <p className="text-sm text-accent">{project.tags.join(" / ")}</p>
                <h2 className="mt-5 text-2xl font-semibold">{project.title}</h2>
                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl space-y-6">
            {detailedProjects.map((project, index) => (
              <FadeIn
                key={project.name}
                delay={index * 0.06}
                className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </p>
                  <h2 className="mt-5 text-3xl font-semibold text-zinc-50">
                    {project.name}
                  </h2>
                  <p className="mt-5 leading-7 text-zinc-400">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.livePath ? (
                    <Link
                      href={project.livePath}
                      className="button-primary mt-7 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition"
                    >
                      View Live Sample
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <Layers3 className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 font-semibold text-zinc-100">
                      Challenge
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-400">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold text-zinc-100">System</h3>
                    <p className="mt-3 leading-7 text-zinc-400">
                      {project.system}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold text-zinc-100">Intended outcomes</h3>
                    <div className="mt-4 grid gap-3">
                      {project.outcomes.map((item) => (
                        <p key={item} className="flex gap-3 text-sm text-zinc-400">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Need a system like this?</h2>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Start with a focused concept and turn it into a fast production
                website, workflow, or AI-assisted interface.
              </p>
            </div>
            <Link
              href="/contact"
              className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
