import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("portfolio");

  const existing = await db.collection("users").findOne({ email });
  if (existing) {
    return Response.json({ error: "User already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    role: "user",
    createdAt: new Date(),
  });

  return Response.json({ success: true });
}