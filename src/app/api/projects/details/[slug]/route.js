import clientPromise from "@/lib/mongodb";

export async function GET(request, { params }) {
  const { slug } = await params;

  const client = await clientPromise;
  const db = client.db("portfolio");

  const project = await db.collection("projects").findOne({
    slug,
    status: "published",
  });

  if (!project) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return Response.json(project);
}