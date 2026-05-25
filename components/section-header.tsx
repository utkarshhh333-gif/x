type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-zinc-400">{description}</p>
    </div>
  );
}
