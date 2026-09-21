import Link from "next/link";

import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Badge from "../ui/Badge";
import Span from "../ui/Span";

const WorkListCard = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col md:flex-row gap-5 md:items-center py-6 border-b border-line hover:pl-2 transition-all"
    >
      {/* Preview */}
      <div className="w-full md:w-40 aspect-video shrink-0 border border-line bg-surface flex items-center justify-center">
        <p className="font-mono text-[10px] text-slate text-center px-2">
          drop {project.slug}.png
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="max-w-md">
          <Heading
            as="h5"
            className="group-hover:text-primary transition-colors"
          >
            {project.title}
          </Heading>

          <Paragraph className="text-[14px] mt-1 max-w-lg">
            {project.description}
          </Paragraph>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

          <Span className="capitalize text-slate group-hover:text-primary transition-colors">
            case study →
          </Span>
      </div>
    </Link>
  );
};

export default WorkListCard;