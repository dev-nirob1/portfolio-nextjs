import Link from "next/link";
import { notFound, } from "next/navigation";
import WindowPanel from "@/app/components/ui/WindowPanel";
import { projects } from "@/data/projects";

const ProjectDetailPage = async({params}) => {
    const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-6 md:px-14 py-16 max-w-4xl mx-auto">
      <Link href="/#work" className="font-mono text-[12px] text-slate hover:text-ink transition-colors">
        ← back to work
      </Link>

      <h1 className="font-display text-[2.2rem] md:text-[2.8rem] leading-tight mt-6 text-ink">
        {project.title}
      </h1>

      <div className="flex gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-primary bg-line/40 px-2 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="aspect-video border border-line bg-surface flex items-center justify-center my-10">
        <p className="font-mono text-[11px] text-slate">drop {project.slug}-hero.png here</p>
      </div>

      <div className="space-y-10">
        <div>
          <p className="font-mono text-[12px] text-slate italic mb-3">// overview</p>
          <p className="text-[15px] leading-relaxed text-ink max-w-2xl">{project.overview}</p>
        </div>

        <div>
          <p className="font-mono text-[12px] text-slate italic mb-3">// problem</p>
          <p className="text-[15px] leading-relaxed text-ink max-w-2xl">{project.problem}</p>
        </div>

        <div>
          <p className="font-mono text-[12px] text-slate italic mb-3">// approach</p>
          <p className="text-[15px] leading-relaxed text-ink max-w-2xl">{project.approach}</p>
        </div>

        <WindowPanel label="stack.js">
          <div className="p-6 font-mono text-[13px]">
            <span className="text-primary">const</span> tools = [
            {project.tags.map((tag, i) => (
              <span key={tag}>
                <span className="text-secondary">"{tag}"</span>
                {i < project.tags.length - 1 && ", "}
              </span>
            ))}
            ]
          </div>
        </WindowPanel>
      </div>
    </div>
  );
};

export default ProjectDetailPage;