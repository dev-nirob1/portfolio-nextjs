"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";

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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <p className="font-mono text-[13px] text-slate italic">
          // all work
        </p>
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

      <div className="space-y-0">
        {filtered.map((project) => (
         <Link
  key={project.slug}
  href="#"
  className="group flex flex-col md:flex-row gap-5 md:items-center py-6 border-b border-line hover:pl-2 transition-all"
>
  <div className="w-full md:w-40 aspect-video shrink-0 border border-line bg-surface flex items-center justify-center">
    <p className="font-mono text-[10px] text-slate text-center px-2">
      drop {project.slug}.png
    </p>
  </div>

  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-3">
    <div>
      <p className="font-display text-[1.3rem] text-ink group-hover:text-primary transition-colors">
        {project.title}
      </p>
      <p className="text-[14px] mt-1 max-w-lg text-slate">
        {project.description}
      </p>
      <div className="flex gap-2 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-primary bg-line/40 px-2 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <span className="font-mono text-[12px] text-slate whitespace-nowrap group-hover:text-ink transition-colors">
      view →
    </span>
  </div>
</Link>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default AllWork;