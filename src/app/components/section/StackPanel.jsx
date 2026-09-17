import WindowPanel from "../ui/WindowPanel";

const stackGroups = [
  { key: "frontend", items: ["React", "Next.js", "Vue.js", "JavaScript"] },
  { key: "styling", items: ["Tailwind CSS v4", "Framer Motion"] },
  { key: "tools", items: ["Git", "Figma"] },
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
    <section id="stack" className="px-6 md:px-14 py-16 border-t border-line">
      <p className="font-mono text-[13px] text-slate italic mb-8">// stack</p>

      <WindowPanel label="stack.js">
        <div className="p-6 font-mono text-[13px] leading-[1.9] overflow-x-auto">
          <span className="text-primary">const</span> stack = {"{"}
          <br />
          {stackGroups.map((group) => (
            <span key={group.key}>
              &nbsp;&nbsp;{group.key}: [
              {group.items.map((item, i) => (
                <span key={item}>
                  <span className="text-secondary">"{item}"</span>
                  {i < group.items.length - 1 && ", "}
                </span>
              ))}
              ],
              <br />
            </span>
          ))}
          {"}"}
        </div>
      </WindowPanel>

      <p className="font-mono text-[12px] text-slate mt-10 mb-4">
        // where I stand
      </p>

      <WindowPanel label="progress.json">
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line">
          <div className="p-6">
            <p className="font-mono text-[11px] text-slate mb-4">basic</p>
            <div className="space-y-4">
              {basic.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-[14px] text-ink">{item.name}</span>
                  <span className="font-mono text-[11px] text-slate">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <p className="font-mono text-[11px] text-slate mb-4">exploring</p>
            <div className="space-y-4">
              {exploring.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-[14px] text-ink">{item.name}</span>
                  <span className="font-mono text-[11px] text-slate">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WindowPanel>
    </section>
  );
};

export default StackPanel;