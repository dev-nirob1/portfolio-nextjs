import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section className="pt-16 pb-16 md:pt-16 md:pb-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-slate mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            available for full-time opportunities
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-[3.4rem] md:text-[3.8rem] tracking-tight text-ink">
            I build clean, <br></br> practical interfaces for the web.
          </h1>

          <p className="mt-7 max-w-md text-[16px] leading-relaxed text-slate">
          I like turning rough ideas into polished interfaces, keeping things practical, reusable, and easy to maintain. I’m always learning, experimenting, and looking for better ways to build.

          </p>

          <div className="mt-9 flex items-center gap-4">
            <Link
              href="#work"
              className="px-6 py-3 rounded-sm bg-ink text-background text-[14px] font-medium hover:bg-primary transition-colors"
            >
              View selected work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-sm border border-line text-[14px] font-medium text-ink hover:border-ink transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="">
          <Image
            src="/portrait.jpeg"
            alt="Portrait"
            width={400}
            height={500}
            className="w-full h-full object-cover border border-line rounded-sm"
          />
        </div>
      </div>
      </Container>
    </section>
  );
};

export default Hero;
