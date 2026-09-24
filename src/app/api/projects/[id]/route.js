import { ObjectId } from "mongodb";
import { verifyToken } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function GET(request, { params }) {
  const { id } = await params;

  const client = await clientPromise;
  const db = client.db("portfolio");

  const project = await db.collection("projects").findOne({
    _id: new ObjectId(id),
  });

  if (!project) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return Response.json(project);
}

export async function PUT(request, { params }) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("portfolio");

  const result = await db.collection("projects").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: body,
    }
  );

  if (result.matchedCount === 0) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
  });
}

export async function DELETE(request, { params }) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;

  const client = await clientPromise;
  const db = client.db("portfolio");

  const result = await db.collection("projects").deleteOne({
    _id: new ObjectId(id),
  });

  if (result.deletedCount === 0) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
  });
}

export async function PATCH(request, { params }) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await request.json();

  const update = {};

  if (typeof body.status === "string") {
    update.status = body.status;
  }

  if (typeof body.featured === "boolean") {
    update.featured = body.featured;
  }

  if (Object.keys(update).length === 0) {
    return Response.json(
      { error: "No valid field provided" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("portfolio");

  const result = await db.collection("projects").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: update,
    }
  );

  if (result.matchedCount === 0) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
  });
}