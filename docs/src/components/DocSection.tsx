interface DocSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function DocSection({
  title,
  description,
  children,
}: DocSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>
      {children}
    </section>
  );
}
