"use client";

import { useState } from "react";
import Link from "next/link";
import { FiUploadCloud } from "react-icons/fi";

import Heading from "@/app/components/ui/Heading";
import Label from "@/app/components/ui/Label";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Button from "@/app/components/ui/Button";
import Span from "@/app/components/ui/Span";
import Paragraph from "@/app/components/ui/Paragraph";

const NewProjectPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    tags: "",
    shortDescription: "",
    overview: "",
    problem: "",
    approach: "",
    status: "draft",
    category: "",
    featured: false,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? files[0]
            : value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("submitted");
  console.log(formData);
}

  return (
    <div>
      <Heading as="h3" className="mb-8">
        Add Project
      </Heading>

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-8"
      >
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Image */}
          <div>
            <Label htmlFor="image">project image</Label>

            <label
              htmlFor="image"
              className="border border-dashed border-line rounded-sm h-48 flex flex-col items-center justify-center text-slate hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <FiUploadCloud size={28} />

              <Span className="mt-3">
                {formData.image
                  ? formData.image.name
                  : "click to upload image"}
              </Span>

              {!formData.image && (
                <Span className="text-[10px] text-slate/60 mt-1">
                  PNG, JPG or WEBP
                </Span>
              )}
            </label>

            <Input
              id="image"
              type="file"
              name="image"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleChange}
              className="hidden"
            />
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title">project title</Label>

            <Input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. BoxDrop"
            />
          </div>

          {/* Slug */}
          <div>
            <Label htmlFor="slug">slug</Label>

            <Input
              id="slug"
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="e.g. boxdrop"
            />
          </div>

          {/* Tags */}
          <div>
            <Label htmlFor="tags">tags</Label>

            <Input
              id="tags"
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="React, Next.js, MongoDB"
            />

            <Paragraph className="text-[11px] text-slate/60 mt-2">
              Separate tags with commas
            </Paragraph>
          </div>

          {/* Short Description */}
          <div>
            <Label htmlFor="shortDescription">
              short description
            </Label>

            <Textarea
              id="shortDescription"
              name="shortDescription"
              rows={3}
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="A short description of the project..."
            />
          </div>

          {/* Overview */}
          <div>
            <Label htmlFor="overview">overview</Label>

            <Textarea
              id="overview"
              name="overview"
              rows={5}
              value={formData.overview}
              onChange={handleChange}
              placeholder="Describe the project and what it does..."
            />
          </div>

          {/* Problem */}
          <div>
            <Label htmlFor="problem">problem</Label>

            <Textarea
              id="problem"
              name="problem"
              rows={5}
              value={formData.problem}
              onChange={handleChange}
              placeholder="What problem does this project solve?"
            />
          </div>

          {/* Approach */}
          <div>
            <Label htmlFor="approach">approach</Label>

            <Textarea
              id="approach"
              name="approach"
              rows={5}
              value={formData.approach}
              onChange={handleChange}
              placeholder="How did you approach the solution?"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="border border-line rounded-sm p-5 space-y-6 lg:sticky lg:top-6">
            {/* Status */}
            <div>
              <Label htmlFor="status">status</Label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-transparent border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <Label htmlFor="category">category</Label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-transparent border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="landing-page">
                  Landing Page
                </option>
                <option value="dashboard">Dashboard</option>
                <option value="admin">Admin</option>
                <option value="full-stack">Full-Stack</option>
              </select>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <Input
                id="featured"
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-4 h-4 p-0 rounded-sm accent-primary cursor-pointer"
              />

              <Label
                htmlFor="featured"
                className="mb-0 cursor-pointer"
              >
                Featured project
              </Label>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-line space-y-3">
              <button type="submit" className="w-full">
                Create Project
              </button>

              <Link
                href="/admin/projects"
                className="block text-center font-mono text-[12px] text-slate hover:text-ink transition-colors"
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