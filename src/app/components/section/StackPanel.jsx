import Container from "../ui/Container";
import WindowPanel from "../ui/WindowPanel";

const stackGroups = [
  { key: "frontend", items: ["React", "Next.js", "Vue.js", "JavaScript"] },
  { key: "styling", items: ["Tailwind CSS", "Framer Motion"] },
  { key: "tools", items: ["Git", "Figma", "VS Code", "Antigravity"] },
];

const basic = [
  { name: "Node.js", role: "runtime" },
  { name: "Express.js", role: "backend" },
  { name: "MongoDB", role: "database" },
];

const exploring = [
  { name: "TypeScript", role: "language" },
  { name: "SQL", role: "database" },
];

const StackPanel = () => {
  return (
    <section id="stack" className="py-16 border-t border-line">
      <Container>
        <p className="font-mono text-[13px] text-slate italic mb-8">// stack</p>

        <WindowPanel label="stack.js">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
            {/* LEFT — code block */}
            <div className="p-6 font-mono text-[13px]">
              <div className="text-slate mb-6">
                <span className="text-primary">const</span>{" "}
                <span className="text-ink">stack</span> = {"{"}
              </div>

              <div className="space-y-4 pl-4">
                {stackGroups.map((group) => (
                  <div key={group.key}>
                    <p className="text-slate mb-3">{group.key}: [</p>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 border border-line bg-surface text-secondary"
                        >
                          "{item}"
                        </span>
                      ))}
                    </div>
                    <p className="text-slate mt-3">];</p>
                  </div>
                ))}
              </div>

              <div className="text-slate mt-6">{"}"}</div>
            </div>

            {/* RIGHT — where I stand */}
            <div className="p-6 divide-y divide-line">
              <div className="pb-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-[11px] text-slate">
                    comfortable
                  </p>
                  <span className="font-mono text-[10px] text-secondary">
                    actively using
                  </span>
                </div>
                <div className="space-y-5">
                  {basic.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-[14px] text-ink">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate">
                        {item.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-[11px] text-slate">exploring</p>
                  <span className="font-mono text-[10px] text-primary">
                    currently learning
                  </span>
                </div>
                <div className="space-y-5">
                  {exploring.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[14px] text-ink">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate">
                        {item.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </WindowPanel>
      </Container>
    </section>
  );
};

export default StackPanel;
