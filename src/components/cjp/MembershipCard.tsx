import { forwardRef } from "react";

interface Props {
  name: string;
  city: string;
  reqId: string;
  joined: string;
  reason?: string;
}

const MembershipCard = forwardRef<HTMLDivElement, Props>(({ name, city, reqId, joined, reason }, ref) => {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase() || "??";
  return (
    <div ref={ref} className="w-[520px] max-w-full bg-paper border-2 border-ink p-8 font-body">
      <div className="flex items-center justify-between border-b border-ink pb-4 mb-6">
        <div>
          <p className="font-condensed text-[10px] text-ink/60">The Cockroach Janta Party</p>
          <p className="font-display text-xs">Member Card · Volume 1</p>
        </div>
        <div className="font-condensed text-[10px] text-ink/60">EST. 2026</div>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-6 items-start">
        <div>
          <p className="font-condensed text-[10px] text-ink/60 mb-2">Full name</p>
          <p className="font-display text-3xl leading-tight">{name || "Your Name"}</p>
          <p className="font-condensed text-[10px] text-ink/60 mt-5 mb-1">City</p>
          <p className="font-display text-lg">{city || "Your City"}</p>
        </div>
        <div className="w-24 h-24 border-2 border-ink bg-secondary flex items-center justify-center">
          <span className="font-display text-3xl">{initials}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-ink mt-6 pt-4 gap-4">
        <div>
          <p className="font-condensed text-[10px] text-ink/60">Application no.</p>
          <p className="font-display text-sm">{reqId}</p>
        </div>
        <div>
          <p className="font-condensed text-[10px] text-ink/60">Joined</p>
          <p className="font-display text-sm">{joined}</p>
        </div>
        <div>
          <p className="font-condensed text-[10px] text-ink/60">Fee</p>
          <p className="font-display text-sm">₹0 · Lifelong</p>
        </div>
      </div>
      {reason && (
        <div className="border-t border-ink mt-4 pt-4">
          <p className="font-condensed text-[10px] text-ink/60 mb-1">Reason for joining</p>
          <p className="font-italic-serif text-base text-ink/85 leading-snug">“{reason}”</p>
        </div>
      )}
      <div className="border-t border-ink mt-5 pt-3 flex items-center justify-between font-condensed text-[10px] text-ink/55">
        <span>⚠ A work of satire</span>
        <span>Approved · Revocable only by you</span>
      </div>
    </div>
  );
});

MembershipCard.displayName = "MembershipCard";
export default MembershipCard;
