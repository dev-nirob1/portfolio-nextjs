import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";
import Dot from "../ui/Dot";
import Span from "../ui/Span";

const Hero = () => {
  return (
    <section className="pt-16 pb-16 md:pt-16 md:pb-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* //content  */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <Dot className="bg-primary" />
              <Span className="text-primary">available for full-time opportunities</Span>
            </div>

            <Heading as="h1">
              I build clean, <br/> practical interfaces for the web.
            </Heading>

            <Paragraph className="mt-7 max-w-md text-base">
              I like turning rough ideas into polished interfaces, keeping
              things practical, reusable, and easy to maintain. I’m always
              learning, experimenting, and looking for better ways to build.
            </Paragraph>

            <div className="mt-9 flex items-center gap-4">
              <Link href="#work">
                <Button variant="primary">View my work</Button>
              </Link>
              <Link href="#contact">
                <Button variant="secondary">Get in touch</Button>
              </Link>
            </div>
          </div>

    {/* image */}
          <div className="">
            <Image
              src="/portrait.jpeg"
              alt="Portrait"
              width={400}
              height={500}
              loading="eager"
              priority
              className="w-full h-full object-cover border border-line rounded-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
