import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("token", "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
  });

  return NextResponse.json({ message: "Logged out" });
}