import Link from "next/link";
import React from "react";
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
      {/* update with image */}
      <div className="aspect-video bg-surface flex items-center justify-center border-b border-line">
        <p className="font-mono text-[11px] text-slate text-center px-4">
          drop {project.slug}.png here
        </p>
      </div>

      <div className="p-5">
        <Heading
          as={"h5"}
          className="group-hover:text-primary transition-colors"
        >
          {project.title}
        </Heading>
        <Paragraph className="text-sm mt-2">{project.description}</Paragraph>

        <div className="flex gap-2 my-4">
          {project.tags.map((tag) => (
            <Badge key={tag}> {tag} </Badge>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-line/50">
          <Span className=" capitalize text-slate group-hover:text-primary transition-colors">
            View case study →
          </Span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedWorkCard;
