"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import WorkListCard from "../Widgets/WorkListCard";
import Loader from "../ui/Loader";
import EmptyState from "../ui/EmptyState";

const AllWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filters, setFilters] = useState(["all"]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const query =
          activeFilter === "all"
            ? "/api/projects?status=published"
            : `/api/projects?status=published&category=${activeFilter}`;
        const res = await axios.get(query);
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeFilter]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/categories");
        const names = res.data.map((category) => category.name.toLowerCase());
        setFilters(["all", ...names]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section id="work" className="py-16 border-t border-line">
      <Container className="max-w-3xl!">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <SectionTitle className="mb-0">All Work</SectionTitle>
          {/* filter button */}
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[12px] px-3 py-1.5 rounded-sm border transition-colors ${
                  activeFilter === filter
                    ? "border-ink text-ink bg-surface"
                    : "border-line text-slate hover:border-ink hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* all work card */}
        {loading ? (
          <Loader />
        ) : projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-0">
            {projects.map((project) => (
              <WorkListCard project={project} key={project.slug} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default AllWork;
