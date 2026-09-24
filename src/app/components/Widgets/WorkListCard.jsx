import Link from "next/link";

import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Badge from "../ui/Badge";
import Span from "../ui/Span";
import Image from "next/image";

const WorkListCard = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col md:flex-row gap-5 md:items-center py-6 border-b border-line hover:pl-2 transition-all duration-500"
    >
      {/* Preview */}
      <div className="w-full md:w-50 h-34 shrink-0 border border-line overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={460}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
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
            {project.shortDescription}
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
