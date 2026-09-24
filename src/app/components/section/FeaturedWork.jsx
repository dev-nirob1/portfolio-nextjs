import Link from "next/link";
import axios from "axios";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FeaturedWorkCard from "../Widgets/FeaturedWorkCard";

const FeaturedWork = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?status=published&featured=true`
  );

  const featured = response.data;

  return (
    <section className="py-16 border-t border-line">
      <Container>
        <SectionTitle>Featured Work</SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <FeaturedWorkCard
              project={project}
              key={project._id}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/#work"
            className="inline-block px-6 py-3 rounded-sm text-[14px] font-medium border border-line text-ink hover:border-ink transition-colors"
          >
            View all work →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;