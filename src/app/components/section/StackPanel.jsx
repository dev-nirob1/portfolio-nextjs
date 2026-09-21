import Container from "../ui/Container";
import Dot from "../ui/Dot";
import Paragraph from "../ui/Paragraph";
import SectionTitle from "../ui/SectionTitle";
import Span from "../ui/Span";
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
        <SectionTitle>Tech Stack</SectionTitle>

        <WindowPanel label="stack.js">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
            {/* LEFT — code block */}
            <div className="p-6 font-mono text-[13px]">
              <div className="text-slate mb-6">
                <span className="text-primary">const</span>{" "}
                <span className="text-ink">stack</span> = {"{"}
              </div>
              {/* stack i know  */}
              <div className="space-y-4 pl-4">
                {stackGroups.map((group) => (
                  <div key={group.key}>
                    <Paragraph className="mb-3">{group.key}: [</Paragraph>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {group.items.map((item) => (
                        <Span
                          key={item}
                          className="px-2.5 py-1 border border-line bg-surface text-secondary"
                        >
                           {`"${item}"`}
                        </Span>
                      ))}
                    </div>
                    <Paragraph className="mt-3">];</Paragraph>
                  </div>
                ))}
              </div>
              <div className="text-slate mt-6">{"}"}</div>
            </div>

            {/* RIGHT — where I stand */}
            <div className="p-6 divide-y divide-line">
              <div className="pb-5">
                <div className="flex items-center justify-between mb-4">
                
                  <Span className="text-secondary">
                    Comfortable
                  </Span>
                  <Span className="text-secondary">
                    Actively using
                  </Span>
                </div>

                <div className="space-y-4">
                  {basic.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Dot className="bg-secondary" />
                        <Span className="text-sm text-ink">
                          {item.name}
                        </Span>
                      </div>
                      <Span>
                        {item.role}
                      </Span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5">
                <div className="flex items-center justify-between mb-4">
                  <Span className="text-slate">
                    Exploring
                  </Span>
                  <Span className="text-primary">
                    Currently Learning
                  </Span>
                </div>

                {/* exploring and learning stack  */}
                <div className="space-y-4">
                  {exploring.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Dot className="text-primary" />
                        <Span className="text-sm text-ink">
                          {item.name}
                        </Span>
                      </div>
                      <Span className="text-slate">
                        {item.role}
                      </Span>
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
