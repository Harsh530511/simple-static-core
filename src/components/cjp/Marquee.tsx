interface Props {
  items: string[];
  separator?: string;
  fast?: boolean;
  variant?: "ink" | "paper";
  className?: string;
}

const Marquee = ({ items, separator = "✦", fast, variant = "ink", className = "" }: Props) => {
  const loop = [...items, ...items];
  const inverted = variant === "ink";
  return (
    <div
      className={`overflow-hidden border-y ${
        inverted ? "bg-ink text-paper border-rule-on-ink" : "bg-paper text-ink border-ink"
      } ${className}`}
    >
      <div className={`marquee ${fast ? "marquee-fast" : ""} py-2.5`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-condensed text-xs sm:text-sm inline-flex items-center gap-4 px-6 whitespace-nowrap"
          >
            <span className="text-gold">{separator}</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
