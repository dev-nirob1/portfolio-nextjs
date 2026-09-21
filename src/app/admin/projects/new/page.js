import Link from "next/link";
import { FiUploadCloud } from "react-icons/fi";

const NewProjectPage = () => {
  return (
    <div>
      <h1 className="font-display text-[1.6rem] text-ink mb-8">Add Project</h1>

      <form className="grid lg:grid-cols-3 gap-8">
        {/* LEFT — main fields */}
        <div className="lg:col-span-2 space-y-5">
          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Project image
            </label>
            <label
              htmlFor="image"
              className="flex items-center gap-3 border border-line rounded-sm bg-surface px-4 py-3 cursor-pointer hover:border-ink transition-colors w-fit"
            >
              <FiUploadCloud className="text-slate" size={18} />
              <span className="text-[13px] text-slate">Upload image</span>
              <input type="file" id="image" name="image" accept="image/*" className="hidden" />
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. BoxDrop — Courier Tracking Platform"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              placeholder="boxdrop"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              placeholder="React, Next.js, Tailwind"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Short description
            </label>
            <textarea
              name="description"
              rows={2}
              placeholder="One-line summary shown in project cards"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Overview
            </label>
            <textarea
              name="overview"
              rows={3}
              placeholder="What is this project and who is it for?"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Problem
            </label>
            <textarea
              name="problem"
              rows={3}
              placeholder="What problem were you solving?"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Approach
            </label>
            <textarea
              name="approach"
              rows={3}
              placeholder="What decisions did you make and why?"
              className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
        </div>

        {/* RIGHT — publishing sidebar */}
        <div className="lg:col-span-1">
          <div className="border border-line rounded-sm p-5 sticky top-6">
            <p className="text-sm font-medium text-ink mb-5">Publishing</p>

            <div className="mb-5">
              <label className="text-[13px] text-slate block mb-1.5">
                Status
              </label>
              <select
                name="status"
                className="w-full bg-surface border border-line rounded-sm px-3 py-2 text-[14px] text-ink focus:outline-none focus:border-primary transition-colors"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="text-[13px] text-slate block mb-1.5">
                Category
              </label>
              <select
                name="category"
                className="w-full bg-surface border border-line rounded-sm px-3 py-2 text-[14px] text-ink focus:outline-none focus:border-primary transition-colors"
              >
                <option value="landing page">landing page</option>
                <option value="dashboard/admin">dashboard/admin</option>
                <option value="full-stack">full-stack</option>
              </select>
            </div>

            <label className="flex items-center gap-2 mt-5 cursor-pointer select-none">
              <input
                type="checkbox"
                name="isFeatured"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <span className="text-[13px] text-ink">Featured project</span>
            </label>
            <p className="text-[11px] text-slate mt-1 pl-6">
              Shows in the homepage featured section
            </p>

            <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-line">
              <button
                type="submit"
                className="w-full text-[14px] font-medium px-4 py-2.5 rounded-sm bg-ink text-background hover:bg-primary transition-colors cursor-pointer"
              >
                Create Project
              </button>
              <Link
                href="/admin/projects"
                className="w-full text-center text-[14px] px-4 py-2.5 rounded-sm border border-line text-slate hover:border-ink hover:text-ink transition-colors"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProjectPage;