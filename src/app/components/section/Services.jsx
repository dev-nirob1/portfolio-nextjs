import Container from "../ui/Container";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Responsive, component-driven websites and web apps built with React, Next.js, and Vue.",
    tags: ["React", "Next.js", "Vue"],
    engagement: "contract · full-time",
  },
  {
    number: "02",
    title: "UI Implementation",
    description:
      "Turning Figma designs into accurate, responsive interfaces with clean, reusable components.",
    tags: ["Figma", "Tailwind CSS"],
    engagement: "one-off project",
  },
  {
    number: "03",
    title: "Frontend Bug Fixes",
    description:
      "Fixing UI issues, responsive problems, layout bugs, and improving existing frontend code.",
    tags: ["React", "Vue", "CSS"],
    engagement: "one-off project",
  },
];
const Services = () => {
  return (
    <section id="services" className="py-16 border-t border-line">
      <Container className="max-w-3xl!">
        <p className="font-mono text-[13px] text-slate italic mb-8">
          // services
        </p>

        <div className="divide-y divide-line">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 first:pt-0 last:pb-0"
            >
              <div className="flex gap-6">
                <span className="font-mono text-[12px] text-slate shrink-0">
                  {service.number}
                </span>
                <div>
                  <p className="font-display text-[1.2rem] text-ink">
                    {service.title}
                  </p>
                  <p className="text-[14px] leading-relaxed text-slate mt-1 max-w-md">
                    {service.description}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-primary bg-line/40 px-2 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <span className="font-mono text-[11px] text-slate whitespace-nowrap md:pl-6">
                {service.engagement}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
