import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-zinc-50">Utkarsh</p>
          <p className="mt-1 text-sm text-zinc-500">
            Web Systems & AI Integration
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-zinc-500">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-zinc-600">
          (c) {new Date().getFullYear()} Utkarsh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
