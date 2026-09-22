import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function proxy(request) {
  const user = verifyToken(request);
  if (!user) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  if(user?.role !=='admin'){
    return NextResponse.redirect(
      new URL('/', request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};