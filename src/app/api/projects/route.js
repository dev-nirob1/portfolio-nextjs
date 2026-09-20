import { verifyToken } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("portfolio");
  const projects = await db.collection("projects").find({}).toArray();

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