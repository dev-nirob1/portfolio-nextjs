import Container from "../ui/Container";
import WindowPanel from "../ui/WindowPanel";

const stats = [
  { value: "2+", label: "years learning & building" },
  { value: "4", label: "core technologies" },
  { value: "2", label: "frontend frameworks" },
];

const About = () => {
  return (
    <section id="about" className="py-16 border-t border-line">
      <Container>
        <p className="font-mono text-[13px] text-slate italic mb-8">// about</p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            <p className="font-display text-[1.9rem] md:text-[2.2rem] leading-[1.15] mb-6 text-ink">
              I turn ideas and designs into{" "}
              <span className="text-primary">
                clean, usable web experiences.
              </span>
            </p>
            <p className="text-[15px] leading-relaxed max-w-md text-slate mb-10">
              I’m a frontend developer focused on React, Next.js, Vue, and
              Tailwind. I build clean, practical web experiences with a focus on
              usability, reusable components, and thoughtful UI.
            </p>
            <p className="text-[15px] leading-relaxed max-w-md text-slate mb-10">
              Currently, I’m going deeper into full-stack development to build
              beyond the interface.
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
              <div className="p-6 font-mono text-[13px] leading-[1.9] space-y-4">
                <p>
                  role:{" "}
                  <span className="text-secondary">"Frontend Developer"</span>
                </p>
                <p>
                  based:{" "}
                  <span className="text-secondary">"Dhaka, Bangladesh"</span>
                </p>
                <p>
                  stack: [<span className="text-secondary">"React"</span>,{" "}
                  <span className="text-secondary">"Next.js"</span>,{" "}
                  <span className="text-secondary">"Vue"</span>,{" "}
                  <span className="text-secondary">"Tailwind"</span>]
                </p>
                <p>
                  Focus:{" "}
                  <span className="text-secondary">
                    "Clean UI & practical experiences"
                  </span>
                </p>
                <p>
                  currently:{" "}
                  <span className="text-secondary">
                    "Going deeper into full-stack"
                  </span>
                </p>
                <p>
                  approach:{" "}
                  <span className="text-secondary">
                    "build, learn, improve"
                  </span>
                </p>
                <p>
                  status:{" "}
                  <span className="text-secondary">
                    "open to full-time roles"
                  </span>
                </p>
                <p className="mt-3 text-slate">
                  <span className="text-primary">$</span>{" "}
                  <span className="animate-pulse">▍</span>
                </p>
              </div>
            </WindowPanel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
