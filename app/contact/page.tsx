import type { Metadata } from "next";
import { Clock3, Mail, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { contactEmail, whatsappLink, whatsappNumber } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact - X",
  description:
    "Start a website, AI automation, or AI integration project with X.",
};

const projectTypes = [
  "Premium website or landing page",
  "Lead capture and inquiry system",
  "AI support or assistant experience",
  "Internal dashboard or workflow interface",
  "Automation planning and integration",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Start with the outcome. Then design the system."
          description="Use this page to outline the project, current bottleneck, and the kind of business result the website, automation, or AI layer needs to support."
          aside={
            <div className="premium-panel rounded-[2rem] p-6">
              <Send className="h-6 w-6 text-accent" aria-hidden="true" />
              <p className="mt-6 text-2xl font-semibold text-zinc-50">
                Project inquiries stay lightweight.
              </p>
              <p className="mt-3 leading-7 text-zinc-400">
                Share the project goal, timeline, and current bottleneck. The
                inquiry can open directly in WhatsApp with the details ready.
              </p>
            </div>
          }
        />

        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeIn className="space-y-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold text-zinc-50">
                  Email
                </h2>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 block break-words text-zinc-400 transition hover:text-accent"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold text-zinc-50">
                  WhatsApp
                </h2>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block break-words text-zinc-400 transition hover:text-accent"
                >
                  +91 {whatsappNumber}
                </a>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <Clock3 className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold text-zinc-50">
                  Response expectation
                </h2>
                <p className="mt-2 leading-7 text-zinc-400">
                  Share enough context to understand the goal, and the first reply
                  can focus on scope, priorities, and the right starting point.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Good starting points
              </p>
              <h2 className="mt-5 text-4xl font-semibold text-zinc-50">
                Useful project categories for a first conversation.
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="grid gap-3">
              {projectTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-zinc-400"
                >
                  {item}
                </div>
              ))}
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
