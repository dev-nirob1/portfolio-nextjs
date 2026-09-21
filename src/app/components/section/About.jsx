import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import SectionTitle from "../ui/SectionTitle";
import Span from "../ui/Span";
import WindowPanel from "../ui/WindowPanel";

const items = [
  {
    label: "Based in",
    value: "Bangladesh",
  },
  {
    label: "Focus",
    value: "Frontend Development",
  },
  {
    label: "Currently",
    value: "Open to opportunities",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 border-t border-line">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            <SectionTitle className="mb-4">About Me</SectionTitle>
            <Heading as="h3" className="mb-4">
              I turn ideas and designs into clean, usable web experiences.
            </Heading>
            <Paragraph className="mb-4">
              I’m a frontend developer focused on React, Next.js, Vue, and
              Tailwind. I build clean, practical web experiences with a focus on
              usability, reusable components, and thoughtful UI.
            </Paragraph>

            <Paragraph className="mb-6">
              Beyond the interface, I’m exploring full-stack development to
              better understand how products work from end to end. I enjoy
              learning, experimenting, and building projects that are simple,
              useful, and well-crafted.
            </Paragraph>

            <div className="flex flex-wrap pt-6 border-t border-line">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="pr-6 mr-6 border-r border-line last:border-r-0"
                >
                  <Span className="text-slate">{item.label}</Span>

                  <Paragraph className="font-mono text-ink mt-1">
                    {item.value}
                  </Paragraph>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <WindowPanel label="about.js">
              <div className="p-6 font-mono text-[13px] leading-[1.9] space-y-4">
                <p>
                  role:{" "}
                  <span className="text-secondary">{`"Frontend Developer"`}</span>
                </p>
                <p>
                  based:{" "}
                  <span className="text-secondary">{`"Dhaka, Bangladesh"`}</span>
                </p>
                <p>
                  stack: [<span className="text-secondary">{`"React"`}</span>,{" "}
                  <span className="text-secondary">{`"Next.js"`}</span>,{" "}
                  <span className="text-secondary">{`"Vue"`}</span>,{" "}
                  <span className="text-secondary">{`"Tailwind"`}</span>]
                </p>
                <p>
                  Focus:{" "}
                  <span className="text-secondary">
                    {`"Clean UI & practical experiences"`}
                  </span>
                </p>
                <p>
                  currently:{" "}
                  <span className="text-secondary">
                    {`"Going deeper into full-stack"`}
                  </span>
                </p>
                <p>
                  approach:{" "}
                  <span className="text-secondary">
                    {`"build, learn, improve"`}
                  </span>
                </p>
                <p>
                  status:{" "}
                  <span className="text-secondary">
                    {`"open to full-time roles"`}
                  </span>
                </p>
                <Paragraph className="mt-3 text-slate">
                  <Span className="text-primary">$</Span>{" "}
                  <Span className="animate-pulse">▍</Span>
                </Paragraph>
              </div>
            </WindowPanel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
