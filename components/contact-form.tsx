"use client";

import { type FormEvent, useEffect, useState } from "react";
import { whatsappLink } from "@/lib/contact";

type SubmitState = "idle" | "sharing" | "shared";

function readFormValue(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function buildWhatsAppMessage(formData: FormData) {
  const name = readFormValue(formData, "name");
  const phone = readFormValue(formData, "phone");
  const company = readFormValue(formData, "company");
  const projectType = readFormValue(formData, "projectType");
  const budget = readFormValue(formData, "budget");
  const timeline = readFormValue(formData, "timeline");
  const message = readFormValue(formData, "message");

  return [
    "New project inquiry from X website",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    company ? `Company: ${company}` : null,
    `Project type: ${projectType}`,
    budget ? `Budget: ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppUrl(message: string) {
  if (!whatsappLink) {
    return "";
  }

  const separator = whatsappLink.includes("?") ? "&" : "?";
  return `${whatsappLink}${separator}text=${encodeURIComponent(message)}`;
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasFormParams =
      params.has("name") ||
      params.has("phone") ||
      params.has("projectType") ||
      params.has("message");

    if (hasFormParams) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("sharing");

    const formData = new FormData(event.currentTarget);
    const message = buildWhatsAppMessage(formData);
    const shareUrl = buildWhatsAppUrl(message);

    window.open(shareUrl, "_blank", "noopener,noreferrer");
    setSubmitState("shared");
  }

  return (
    <form
      className="premium-panel rounded-[2rem] p-5 sm:p-7"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-accent/70"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-accent/70"
            placeholder="+91 98765 43210"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          Company
          <input
            name="company"
            autoComplete="organization"
            className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-accent/70"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Project type
          <select
            name="projectType"
            required
            className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-zinc-100 outline-none transition focus:border-accent/70"
            defaultValue=""
          >
            <option value="" disabled>
              Select a project
            </option>
            <option>Website Development</option>
            <option>AI Automation</option>
            <option>AI Integration</option>
            <option>Dashboard or Business System</option>
          </select>
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          Budget range
          <select
            name="budget"
            className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-zinc-100 outline-none transition focus:border-accent/70"
            defaultValue=""
          >
            <option value="" disabled>
              Select range
            </option>
            <option>Exploring scope</option>
            <option>Starter build</option>
            <option>Full system</option>
            <option>Ongoing iteration</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Timeline
          <select
            name="timeline"
            className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-zinc-100 outline-none transition focus:border-accent/70"
            defaultValue=""
          >
            <option value="" disabled>
              Select timeline
            </option>
            <option>As soon as practical</option>
            <option>Within 4 weeks</option>
            <option>Within 2 months</option>
            <option>Planning ahead</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-zinc-300">
        Message
        <textarea
          name="message"
          rows={6}
          required
          className="resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-accent/70"
          placeholder="Tell us what you want to build, what is not working today, and what a good outcome would look like."
        />
      </label>

      <button
        type="submit"
        disabled={submitState === "sharing"}
        className="button-primary mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "sharing" ? "Opening..." : "Share"}
      </button>

      <p className="mt-4 min-h-5 text-sm text-zinc-400" aria-live="polite">
        {submitState === "shared"
          ? "WhatsApp opened with the project message ready to send."
          : null}
      </p>
    </form>
  );
}
