import Link from "next/link";
import WindowPanel from "../ui/WindowPanel";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="px-6 md:px-14 pt-16 pb-16 md:pt-16 md:pb-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-slate mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            available for full-time roles
          </div>

          <p className="font-mono text-[13px] mb-6 text-slate">
            Frontend developer · React / Next.js / Tailwind
          </p>

          <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-[3.4rem] md:text-[3.8rem] tracking-tight text-ink">
            I build interfaces
            <br />
            that hold up under
            <br />
            real use.
          </h1>

          <p className="mt-7 max-w-md text-[16px] leading-relaxed text-slate">
            Three years turning designs and half-finished ideas into shipped
            products — dashboards, storefronts, and the small interactions that
            make software feel considered rather than assembled.
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
    </section>
  );
};

export default Hero;
