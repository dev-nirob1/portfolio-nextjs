import { verifyToken } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  const filter = {};
  if (status) filter.status = status;
  if (category) filter.category = category;
  if (featured) filter.featured = featured === "true";

  const client = await clientPromise;
  const db = client.db("portfolio");
  const projects = await db.collection("projects").find(filter).toArray();

  return Response.json(projects);
}

export async function POST(request) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("portfolio");

  const result = await db.collection("projects").insertOne(body);

  return Response.json({ success: true, id: result.insertedId });
}