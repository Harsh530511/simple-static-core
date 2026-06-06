import { LIVE_TICKER } from "@/data/members";

const LiveMemberTicker = () => {
  const loop = [...LIVE_TICKER, ...LIVE_TICKER];
  return (
    <div className="border-b border-ink bg-paper overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 bg-ink text-paper font-condensed text-[10px] px-4 py-2.5 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          LIVE · JOINING NOW
        </div>
        <div className="marquee flex-1">
          {loop.map((m, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-5 border-r border-ink/15 py-1.5 whitespace-nowrap"
            >
              <span className="w-7 h-7 rounded-full border border-ink flex items-center justify-center font-condensed text-[10px] bg-secondary">
                {m.initials}
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xs">{m.name}</span>
                <span className="font-condensed text-[9px] text-ink/55">{m.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveMemberTicker;
