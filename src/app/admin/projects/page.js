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
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`/api/projects/${id}`, { status });

      setProjects((prev) =>
        prev.map((project) =>
          project._id === id ? { ...project, status } : project
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleFeaturedChange = async (id, featured) => {
    try {
      await axios.patch(`/api/projects/${id}`, { featured });

      setProjects((prev) =>
        prev.map((project) =>
          project._id === id ? { ...project, featured } : project
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      await axios.delete(`/api/projects/${id}`);

      setProjects((prev) =>
        prev.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p className="text-[14px] text-slate">Loading...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-[1.6rem] text-ink">
          All Projects
        </h1>

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
                <th className="text-[12px] font-medium text-slate px-4 py-3">
                  Title
                </th>

                <th className="text-[12px] font-medium text-slate px-4 py-3">
                  Category
                </th>

                <th className="text-[12px] font-medium text-slate px-4 py-3">
                  Status
                </th>

                <th className="text-[12px] font-medium text-slate px-4 py-3">
                  Featured
                </th>

                <th className="text-[12px] font-medium text-slate px-4 py-3 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-line">
              {projects.map((project) => (
                <tr key={project._id}>
                  <td className="px-4 py-3.5 text-[14px] text-ink">
                    {project.title}
                  </td>

                  <td className="px-4 py-3.5 text-[13px] text-slate">
                    {project.category}
                  </td>

                  <td className="px-4 py-3.5">
                    <select
                      value={project.status}
                      onChange={(e) =>
                        handleStatusChange(
                          project._id,
                          e.target.value
                        )
                      }
                      className="bg-surface border border-line rounded-sm px-2 py-1.5 text-[12px] text-ink focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </td>

                  <td className="px-4 py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        handleFeaturedChange(
                          project._id,
                          !project.featured
                        )
                      }
                      className={`text-[12px] px-3 py-1.5 rounded-sm border transition-colors cursor-pointer ${
                        project.featured
                          ? "border-primary text-primary"
                          : "border-line text-slate hover:border-ink hover:text-ink"
                      }`}
                    >
                      {project.featured ? "Featured" : "Not featured"}
                    </button>
                  </td>

                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/projects/edit/${project._id}`}
                        className="p-2 rounded-sm border border-line text-slate hover:border-ink hover:text-ink transition-colors"
                      >
                        <FiEdit2 size={14} />
                      </Link>

                      <button
                        onClick={() => handleDelete(project._id)}
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
      )}
    </div>
  );
};

export default ProjectsPage;