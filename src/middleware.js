import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(request) {
  const user = verifyToken(request);

  if (!user || user.role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};