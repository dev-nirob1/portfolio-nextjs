import Link from "next/link";
import Container from "../ui/Container";

const featured = [
  {
    slug: "boxdrop",
    title: "BoxDrop",
    description: "Full-stack courier tracking platform",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    slug: "aurex-chronograph",
    title: "Aurex Chronograph",
    description: "Luxury watch landing & checkout flow",
    tags: ["Next.js", "Tailwind"],
  },
  {
    slug: "merchant-saas",
    title: "Merchant SaaS Platform",
    description: "Multi-tenant landing pages & order management",
    tags: ["Next.js", "Tailwind"],
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-16 border-t border-line">
      <Container>
        <p className="font-mono text-[13px] text-slate italic mb-8">
          // featured work
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block border border-line rounded-sm overflow-hidden hover:border-ink transition-colors"
            >
              <div className="aspect-video bg-surface flex items-center justify-center border-b border-line">
                <p className="font-mono text-[11px] text-slate text-center px-4">
                  drop {project.slug}.png here
                </p>
              </div>

              <div className="p-5">
                <p className="font-display text-[1.15rem] text-ink group-hover:text-primary transition-colors">
                  {project.title}
                </p>
                <p className="text-[13px] text-slate mt-1">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-primary bg-line/40 px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[12px] text-slate mt-4 inline-block group-hover:text-ink transition-colors">
                  view case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
  <Link
    href="/#work"
    className="inline-block font-mono text-[13px] px-6 py-3 rounded-sm border border-line text-ink hover:border-ink hover:bg-surface transition-colors"
  >
    view more work →
  </Link>
</div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
