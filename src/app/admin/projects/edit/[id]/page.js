"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Label from "@/app/components/ui/Label";
import Button from "@/app/components/ui/Button";

const EditProject = () => {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    tags: "",
    shortDescription: "",
    overview: "",
    problem: "",
    approach: "",
    githubUrl: "",
    liveUrl: "",
    image: "",
    featured: false,
    status: "draft",
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${id}`);

        const project = response.data;

        setFormData({
          title: project.title || "",
          slug: project.slug || "",
          category: project.category || "",
          tags: project.tags?.join(", ") || "",
          shortDescription: project.shortDescription || "",
          overview: project.overview || "",
          problem: project.problem || "",
          approach: project.approach || "",
          githubUrl: project.githubUrl || "",
          liveUrl: project.liveUrl || "",
          image: project.image || "",
          featured: project.featured || false,
          status: project.status || "draft",
        });
      } catch (error) {
        console.error(error);
        setError("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      await axios.put(`/api/projects/${id}`, {
        ...formData,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      });

      router.push("/admin/projects");
    } catch (error) {
      console.error(error);
      setError("Failed to update project.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <p className="text-[14px] text-slate">
        Loading project...
      </p>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-[1.6rem] text-ink">
          Edit Project
        </h1>

        <p className="text-[14px] text-slate mt-1">
          Update your project information.
        </p>
      </div>

      {error && (
        <p className="text-[14px] text-red-600 mb-6">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-3xl"
      >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="tags">
            Tags
          </Label>
          <Input
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="React, Next.js, MongoDB"
          />
        </div>

        <div>
          <Label htmlFor="shortDescription">
            Short Description
          </Label>
          <Textarea
            id="shortDescription"
            name="shortDescription"
            rows={3}
            value={formData.shortDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="overview">Overview</Label>
          <Textarea
            id="overview"
            name="overview"
            rows={5}
            value={formData.overview}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="problem">Problem</Label>
          <Textarea
            id="problem"
            name="problem"
            rows={5}
            value={formData.problem}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="approach">Approach</Label>
          <Textarea
            id="approach"
            name="approach"
            rows={5}
            value={formData.approach}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input
            id="githubUrl"
            name="githubUrl"
            type="url"
            value={formData.githubUrl}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="liveUrl">Live URL</Label>
          <Input
            id="liveUrl"
            name="liveUrl"
            type="url"
            value={formData.liveUrl}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="status">Status</Label>

          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-transparent border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary transition-colors"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-4 h-4 accent-primary"
          />

          <span className="text-[14px] text-ink">
            Featured project
          </span>
        </label>

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            disabled={saving}
          >
            {saving ? "Saving..." : "Update Project"}
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push("/admin/projects")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;