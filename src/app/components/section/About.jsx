import WindowPanel from "../ui/WindowPanel";

const stats = [
  { value: "1-2", label: "years building for real clients" },
  { value: "6+", label: "projects shipped" },
  { value: "4+", label: "industries worked in" },
];

const About = () => {
  return (
    <section id="about" className="px-6 md:px-14 py-16 border-t border-line">
      <p className="font-mono text-[13px] text-slate italic mb-8">// about</p>

      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-7">
          <p className="font-display text-[1.9rem] md:text-[2.2rem] leading-[1.15] mb-6 text-ink">
            I don&apos;t just style components —{" "}
            <span className="text-primary">I make sure they hold up</span>{" "}
            when real data and real users hit them.
          </p>
          <p className="text-[15px] leading-relaxed max-w-md text-slate mb-10">
            Most of my work sits at the point where a design file has to
            become something that actually behaves — real edge cases, real
            users clicking things in the wrong order. Lately I&apos;ve also
            been building full-stack side projects to get comfortable owning
            a product end to end, not just its interface.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-line">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[2rem] text-ink leading-none">
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] text-slate mt-2 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <WindowPanel label="about.js">
            <div className="p-6 font-mono text-[13px] leading-[1.9]">
              <p className="text-slate">
                <span className="text-primary">$</span> node about.js
              </p>
              <p className="mt-3">
                role: <span className="text-secondary">"Frontend Developer"</span>
              </p>
              <p>
                based: <span className="text-secondary">"Dhaka, Bangladesh"</span>
              </p>
              <p>
                focus: [<span className="text-secondary">"React"</span>,{" "}
                <span className="text-secondary">"Next.js"</span>,{" "}
                <span className="text-secondary">"Tailwind"</span>]
              </p>
              <p>
                approach:{" "}
                <span className="text-secondary">
                  "ship it, then make it right"
                </span>
              </p>
              <p>
                status:{" "}
                <span className="text-secondary">"open to full-time roles"</span>
              </p>
              <p className="mt-3 text-slate">
                <span className="text-primary">$</span>{" "}
                <span className="animate-pulse">▍</span>
              </p>
            </div>
          </WindowPanel>
        </div>
      </div>
    </section>
  );
};

export default About;