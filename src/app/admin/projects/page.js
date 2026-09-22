import Link from "next/link";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import Heading from "@/app/components/ui/Heading";
import Button from "@/app/components/ui/Button";

const projects = [
  { id: 1, title: "BoxDrop", category: "full-stack", status: "published" },
  { id: 2, title: "Aurex Chronograph", category: "landing page", status: "draft" },
  {
    id: 3,
    title: "Merchant SaaS Platform",
    category: "full-stack",
    status: "published",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <Heading as="h3">
          All Projects
        </Heading>

        <Link href="/admin/projects/new">
          <Button type="button">
            + Add Project
          </Button>
        </Link>
      </div>

      <div className="border border-line rounded-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface border-b border-line">
              <th className="text-[12px] font-medium text-slate px-4 py-3">
                Title
              </th>
              <th className="text-[12px] font-medium text-slate px-4 py-3">
                Category
              </th>
              <th className="text-[12px] font-medium text-slate px-4 py-3">
                Status
              </th>
              <th className="text-[12px] font-medium text-slate px-4 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-line">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-4 py-3.5 text-[14px] text-ink">
                  {project.title}
                </td>

                <td className="px-4 py-3.5 text-[13px] text-slate">
                  {project.category}
                </td>

                <td className="px-4 py-3.5">
                  <select
                    defaultValue={project.status}
                    className="bg-surface border border-line rounded-sm px-2 py-1.5 text-[12px] text-ink focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </td>

                <td className="px-4 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="p-2 rounded-sm border border-line text-slate hover:border-ink hover:text-ink transition-colors cursor-pointer"
                    >
                      <FiEdit2 size={14} />
                    </button>

                    <button
                      type="button"
                      className="p-2 rounded-sm border border-line text-slate hover:border-primary hover:text-primary transition-colors cursor-pointer"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;