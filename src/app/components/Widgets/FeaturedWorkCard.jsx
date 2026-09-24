import Link from "next/link";
import Image from "next/image";

import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Badge from "../ui/Badge";
import Span from "../ui/Span";

const FeaturedWorkCard = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border border-line/50 rounded-sm overflow-hidden hover:border-line transition-colors"
    >
      {/* Image */}
      <div className="relative aspect-video border-b border-line overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <Heading
          as="h5"
          className="group-hover:text-primary transition-colors"
        >
          {project.title}
        </Heading>

        <Paragraph className="text-sm mt-2">
          {project.shortDescription}
        </Paragraph>

        <div className="flex flex-wrap gap-2 my-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-line/50">
          <Span className="capitalize text-slate group-hover:text-primary transition-colors">
            View case study →
          </Span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedWorkCard;