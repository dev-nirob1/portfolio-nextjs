import Link from "next/link";
import Image from "next/image";

import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Badge from "@/app/components/ui/Badge";
import axios from "axios";

const ProjectDetailPage = async ({ params }) => {
  const { slug } = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/details/${slug}`
  );

  const project = response.data;

  return (
    <main className="py-12">
      <Container className="max-w-3xl!">
        {/* Back */}
        <Link
          href="/"
          className="font-mono text-[12px] text-slate hover:text-ink transition-colors"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mt-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <Heading as="h3">{project.title}</Heading>

              <Paragraph className="mt-2">
                {project.shortDescription}
              </Paragraph>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags?.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex gap-3 shrink-0">
              <Link
                href="#"
                className="px-5 py-2.5 rounded-sm border border-line text-[13px] font-medium text-ink hover:border-ink transition-colors"
              >
                GitHub ↗
              </Link>

              <Link
                href="#"
                className="px-5 py-2.5 rounded-sm bg-ink text-background text-[13px] font-medium hover:bg-primary transition-colors"
              >
                Live site ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        {project.image && (
          <div className="relative w-full aspect-video border border-line mt-6 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Overview */}
        {project.overview && (
          <section className="mt-8">
            <Heading as="h5">Overview</Heading>

            <Paragraph className="mt-2">
              {project.overview}
            </Paragraph>
          </section>
        )}

        {/* Problem */}
        {project.problem && (
          <section className="mt-6">
            <Heading as="h5">Problem</Heading>

            <Paragraph className="mt-2">
              {project.problem}
            </Paragraph>
          </section>
        )}

        {/* Approach */}
        {project.approach && (
          <section className="mt-6">
            <Heading as="h5">Approach</Heading>

            <Paragraph className="mt-2">
              {project.approach}
            </Paragraph>
          </section>
        )}
      </Container>
    </main>
  );
};

export default ProjectDetailPage;