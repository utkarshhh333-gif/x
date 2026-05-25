import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Layers3,
  MessageSquare,
  MousePointer2,
  PanelsTopLeft,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionHeader } from "@/components/section-header";
import { contactEmail, whatsappLink, whatsappNumber } from "@/lib/contact";
import {
  conceptFeedback,
  processSteps,
  projects,
  services,
} from "@/lib/content";

const icons = [PanelsTopLeft, Workflow, Bot];
const processIcons = [
  MousePointer2,
  Layers3,
  Sparkles,
  Code2,
  Bot,
  Rocket,
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 lg:px-10 lg:pt-40"
        >
          <div className="absolute left-1/2 top-16 -z-10 h-80 w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:w-[42rem]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Boutique web systems studio
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-zinc-50 sm:text-6xl lg:text-7xl">
                Web Systems & AI Integration for Modern Businesses
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                We build fast, premium websites, automation flows, and practical
                AI integrations that help businesses capture leads, respond
                faster, and operate smarter.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/work"
                  className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-zinc-100 transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
                >
                  Start a Project
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="premium-panel noise relative overflow-hidden rounded-[2rem] p-4">
                <div className="soft-grid relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5">
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-zinc-500">System overview</p>
                      <p className="mt-1 text-lg font-medium">Lead intake flow</p>
                    </div>
                    <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                      Live concept
                    </div>
                  </div>
                  <div className="grid gap-3 py-5 sm:grid-cols-3">
                    {["Fast Performance", "AI Integration", "Automation Systems"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                        >
                          <CheckCircle2 className="mb-5 h-5 w-5 text-accent" />
                          <p className="text-sm font-medium text-zinc-100">
                            {item}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Website", "Captures qualified inquiry"],
                      ["Automation", "Routes data to the right workflow"],
                      ["AI layer", "Responds, summarizes, and assists"],
                    ].map(([label, text], index) => (
                      <div
                        key={label}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-zinc-300">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-100">
                            {label}
                          </p>
                          <p className="text-sm text-zinc-500">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section aria-label="Trust signals" className="px-5 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto grid max-w-7xl grid-cols-2 gap-3 border-y border-white/10 py-6 sm:grid-cols-5">
            {[
              "Fast Performance",
              "AI Powered",
              "Responsive Systems",
              "Automation Ready",
              "Vercel Optimized",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-center text-sm text-zinc-400"
              >
                {item}
              </div>
            ))}
          </FadeIn>
        </section>

        <section id="services" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services"
              title="Focused systems for serious business execution."
              description="X combines premium web craft with useful automation and AI, keeping every layer clean, fast, and easy to operate."
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = icons[index];
                return (
                  <FadeIn
                    key={service.title}
                    delay={index * 0.08}
                    className="premium-panel rounded-3xl p-6 transition hover:border-white/15 hover:bg-white/[0.045]"
                  >
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    <h3 className="mt-8 text-2xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-400">
                      {service.description}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Featured work"
              title="Concept systems with production-grade thinking."
              description="No fake client claims. These are demo systems built to show how X thinks through business problems, interfaces, and automation."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <FadeIn
                  key={project.title}
                  delay={index * 0.08}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="soft-grid relative h-56 overflow-hidden border-b border-white/10 bg-[#101010] p-5">
                    <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-premium">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="h-2 w-20 rounded-full bg-zinc-700" />
                        <div className="h-2 w-10 rounded-full bg-accent/60" />
                      </div>
                      <div className="grid gap-3">
                        <div className="h-9 rounded-xl bg-white/[0.06]" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-20 rounded-xl bg-white/[0.04]" />
                          <div className="h-20 rounded-xl bg-white/[0.04]" />
                          <div className="h-20 rounded-xl bg-white/[0.04]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>
                    <p className="mt-5 text-sm leading-6 text-zinc-300">
                      <span className="text-zinc-500">Problem solved: </span>
                      {project.problem}
                    </p>
                    <Link
                      href="/work"
                      className="mt-6 inline-flex items-center text-sm font-medium text-zinc-100 transition group-hover:text-accent"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Process"
              title="A calm path from idea to operating system."
              description="The work is structured so decisions stay visible, scope stays practical, and the final system is ready to use."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <FadeIn
                    key={step.title}
                    delay={index * 0.04}
                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <p className="mt-7 text-sm text-zinc-500">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-zinc-400">
                      {step.description}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Early concept feedback"
              title="Clear enough for business owners, polished enough for modern teams."
              description="Early feedback from demos and concept walkthroughs."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {conceptFeedback.map((item, index) => (
                <FadeIn
                  key={item.source}
                  delay={index * 0.08}
                  className="premium-panel rounded-3xl p-7"
                >
                  <MessageSquare
                    className="h-5 w-5 text-accent"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-8 text-xl leading-8 text-zinc-100">
                    &quot;{item.quote}&quot;
                  </blockquote>
                  <p className="mt-6 text-sm text-zinc-500">- {item.source}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-24 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:p-14">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                About X
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Focused, technical, and built for useful outcomes.
              </h2>
            </div>
            <div className="text-lg leading-8 text-zinc-400">
              <p>
                X is a focused web and AI systems studio building clean digital
                experiences, automation workflows, and practical AI integrations
                for businesses that want speed, clarity, and modern execution.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Premium UI systems",
                  "Fast lightweight architecture",
                  "Business-focused thinking",
                  "Practical AI implementation",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300"
                  >
                    <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Contact
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Start with the system your business actually needs.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                Share the goal, the current bottleneck, and the kind of project
                you have in mind. Send the inquiry on WhatsApp or reach out by
                email directly.
              </p>
              <div className="mt-8 space-y-3 text-sm text-zinc-400">
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="transition hover:text-accent"
                  >
                    {contactEmail}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent"
                  >
                    +91 {whatsappNumber}
                  </a>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
