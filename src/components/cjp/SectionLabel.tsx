interface Props {
  label: string;
  title: string;
  emphasis: string;
  description?: string;
}

const SectionLabel = ({ label, title, emphasis, description }: Props) => (
  <div className="border-b border-ink">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <p className="font-condensed text-xs text-ink/60 mb-4">{label}</p>
      <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
        {title} <span className="font-italic-serif text-ink/80">{emphasis}</span>
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  </div>
);

export default SectionLabel;
