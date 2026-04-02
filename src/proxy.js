import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;

  const protectedRoutes = ["/cart", "/wishlist", "/my-orders"];

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// SAME config
export const config = {
  matcher: ["/cart/:path*", "/wishlist/:path*", "/my-orders/:path*"],
};