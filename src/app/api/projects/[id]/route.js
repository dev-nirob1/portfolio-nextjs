import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { verifyToken } from "@/lib/auth";

export async function PUT(request, { params }) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("portfolio");

  await db
    .collection("projects")
    .updateOne({ _id: new ObjectId(params.id) }, { $set: body });

  return Response.json({ success: true });
}

export async function DELETE(request, { params }) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db("portfolio");

  await db.collection("projects").deleteOne({ _id: new ObjectId(params.id) });

  return Response.json({ success: true });
}