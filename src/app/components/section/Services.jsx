import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Badge from "../ui/Badge";
import Span from "../ui/Span";

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
        <SectionTitle>Services</SectionTitle>

        <div className="divide-y divide-line">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 first:pt-0 last:pb-0"
            >
              <div className="flex gap-6">
                <Span className="text-slate shrink-0">
                  {service.number}
                </Span>

                <div>
                  <Heading as="h5">{service.title}</Heading>

                  <Paragraph className="text-[14px] mt-1 max-w-md">
                    {service.description}
                  </Paragraph>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Span className="text-slate whitespace-nowrap md:pl-6">
                {service.engagement}
              </Span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;