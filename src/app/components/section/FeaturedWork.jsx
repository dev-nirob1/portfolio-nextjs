import Link from "next/link";

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
    <section className="px-6 md:px-14 py-16 border-t border-line">
      <p className="font-mono text-[13px] text-slate italic mb-8">
        // featured work
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((project) => (
          <Link key={project.slug} href="#" className="group block">
            <div className="aspect-video border border-line bg-surface flex items-center justify-center mb-4">
              <p className="font-mono text-[11px] text-slate text-center px-4">
                drop {project.slug}.png here
              </p>
            </div>
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;