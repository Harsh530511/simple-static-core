import SEO from "@/components/cjp/SEO";
import SectionLabel from "@/components/cjp/SectionLabel";

const Contact = () => (
  <>
    <SEO
      title="Contact"
      description="Get in touch with The Cockroach Janta Party. No forms. No captchas. Just write to us — rants, retweets, resentment, all welcome."
      path="/contact"
    />
    <SectionLabel
      label="Get in touch"
      title="Connect"
      emphasis="with us."
      description="Want to join, volunteer, complain, or send a meme? Write to us. We read everything. We reply to most things."
    />
    <div className="border-b border-ink">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink border border-ink">
        {[
          { label: "Email", value: "hello@tcjp.in", href: "mailto:hello@tcjp.in" },
          { label: "Press", value: "press@tcjp.in", href: "mailto:press@tcjp.in" },
          { label: "Headquarters", value: "Wherever the wifi works." },
        ].map((c) => (
          <div key={c.label} className="bg-paper p-8">
            <p className="font-condensed text-[10px] text-ink/60 mb-3">{c.label}</p>
            {c.href ? (
              <a href={c.href} className="font-display text-2xl hover:text-gold break-all">{c.value}</a>
            ) : (
              <p className="font-display text-2xl">{c.value}</p>
            )}
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
        <div className="border border-ink bg-ink text-paper p-10 text-center">
          <p className="font-condensed text-xs text-gold mb-3">Drop a line</p>
          <h3 className="font-display text-4xl sm:text-5xl mb-4">
            Open your <span className="font-italic-serif text-gold">mailbox.</span>
          </h3>
          <p className="text-paper/70 mb-6 max-w-md mx-auto">
            No forms. No captchas. Just write to us — rants, retweets, resentment, all welcome.
          </p>
          <a
            href="mailto:hello@tcjp.in?subject=Joining%20The%20Cockroach%20Janta%20Party"
            className="inline-block font-condensed text-sm px-6 py-4 bg-gold text-ink hover:bg-paper transition-colors"
          >
            EMAIL US →
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
