import { verifyToken } from "@/lib/auth";

export async function GET(request) {
  const user = verifyToken(request);

  if (!user) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  return Response.json({
    name: user.name,
    email: user.email,
    role: user.role,
  });
}