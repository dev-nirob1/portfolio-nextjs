import Link from "next/link";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FeaturedWorkCard from "../Widgets/FeaturedWorkCard";
import Button from "../ui/Button";

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
        <SectionTitle>Featured Work</SectionTitle>

        {/* featured card loop */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <FeaturedWorkCard project={project} key={project.slug} />
          ))}
        </div>

        {/* nagivation link button  */}
        <div className="text-center mt-10">
          <Link href="/#work">
            <Button variant="secondary">View case study →</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
