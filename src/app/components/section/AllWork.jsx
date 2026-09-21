"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import WorkListCard from "../Widgets/WorkListCard";

const projects = [
  {
    slug: "boxdrop",
    title: "BoxDrop — courier tracking platform",
    description:
      "Full-stack resume project: role-based dashboards, live parcel status timeline, and admin tooling built on a raw MongoDB + Express backend.",
    tags: ["React", "Vite", "Express", "MongoDB"],
    category: "full-stack",
  },
  {
    slug: "aurex-chronograph",
    title: "Aurex Chronograph — watch e-commerce",
    description:
      "Landing page and full checkout flow for a luxury watch concept — scroll-triggered counters, a 2-step order form, and an admin dashboard with a global drawer system.",
    tags: ["Next.js", "Tailwind", "Context API"],
    category: "frontend",
  },
  {
    slug: "merchant-saas",
    title: "Merchant SaaS Platform",
    description:
      "Multi-tenant landing pages with drag-and-drop editors, order management, and a background courier fraud-check system.",
    tags: ["Next.js", "Tailwind"],
    category: "full-stack",
  },
  {
    slug: "wow-consultancy",
    title: "Wow Consultancy & Visa",
    description:
      "Next.js frontend build with a transparent/white scroll navbar, custom CSS marquee, and a testimonials slider.",
    tags: ["Next.js"],
    category: "frontend",
  },
  {
    slug: "manacop-construction",
    title: "Manacop Construction Services",
    description:
      "Client site with a SwiperJS gallery, FAQ accordion, and a contact page with animated inputs.",
    tags: ["Next.js"],
    category: "frontend",
  },
  {
    slug: "webpoka-site",
    title: "Webpoka Agency Site",
    description: "Rebuild of the agency's own portfolio site.",
    tags: ["Next.js", "Tailwind"],
    category: "frontend",
  },
];

const filters = ["all", "full-stack", "frontend"];

const AllWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="work" className="py-16 border-t border-line">
      <Container className="max-w-3xl!">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <SectionTitle className="mb-0">All Work</SectionTitle>
          {/* filter button  */}
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
            {/* all work card  */}
        <div className="space-y-0">
          {filtered.map((project) => (
            <WorkListCard project={project} key={project.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllWork;
