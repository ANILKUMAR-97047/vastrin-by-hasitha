import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Address from "@/models/Address";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

const getAuthenticatedUserId = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  const decoded = verifyToken(token);
  const userId = decoded?.userId;

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return null;
  }

  return userId;
};

// 👉 GET all addresses of logged-in user
export async function GET(req) {
  try {
    await connectDB();

    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid or missing userId" },
        { status: 401 }
      );
    }

    const addresses = await Address.find({ userId });

    return NextResponse.json(addresses);
  } catch (error) {
    console.error("GET ADDRESS ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 👉 CREATE address
export async function POST(req) {
  try {
    await connectDB();

    const userId = await getAuthenticatedUserId();
    const body = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid or missing userId" },
        { status: 401 }
      );
    }

    const newAddress = await Address.create({
      ...body,
      userId,
    });

    return NextResponse.json(newAddress, { status: 201 });
  } catch (error) {
    console.error("POST ADDRESS ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
