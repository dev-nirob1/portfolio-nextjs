import jwt from "jsonwebtoken";

export const verifyToken = (request) => {
  const token = request.cookies.get("session_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch {
    return null;
  }
};