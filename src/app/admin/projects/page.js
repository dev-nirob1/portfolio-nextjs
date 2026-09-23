"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import axios from "axios";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-[14px] text-slate">Loading...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-[1.6rem] text-ink">All Projects</h1>
        <Link
          href="/admin/projects/new"
          className="text-[14px] font-medium px-4 py-2.5 rounded-sm bg-ink text-background hover:bg-primary transition-colors"
        >
          + Add Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-[14px] text-slate">No projects yet.</p>
      ) : (
        <div className="border border-line rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface border-b border-line">
                <th className="text-[12px] font-medium text-slate px-4 py-3">Title</th>
                <th className="text-[12px] font-medium text-slate px-4 py-3">Category</th>
                <th className="text-[12px] font-medium text-slate px-4 py-3">Status</th>
                <th className="text-[12px] font-medium text-slate px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {projects.map((project) => (
                <tr key={project._id}>
                  <td className="px-4 py-3.5 text-[14px] text-ink">{project.title}</td>
                  <td className="px-4 py-3.5 text-[13px] text-slate">{project.category}</td>
                  <td className="px-4 py-3.5">
                    <select
                      defaultValue={project.status}
                      className="bg-surface border border-line rounded-sm px-2 py-1.5 text-[12px] text-ink focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/projects/${project._id}/edit`}
                        className="p-2 rounded-sm border border-line text-slate hover:border-ink hover:text-ink transition-colors"
                      >
                        <FiEdit2 size={14} />
                      </Link>
                      <button className="p-2 rounded-sm border border-line text-slate hover:border-primary hover:text-primary transition-colors cursor-pointer">
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;