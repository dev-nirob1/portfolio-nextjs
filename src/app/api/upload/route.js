import { put } from "@vercel/blob";
import { verifyToken } from "@/lib/auth";

export async function POST(request) {
  const user = verifyToken(request);
  if (!user || user.role !== "admin") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!file) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  const blob = await put(file.name, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return Response.json({ url: blob.url });
}