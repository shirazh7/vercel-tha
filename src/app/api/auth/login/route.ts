import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const validUser = process.env.BASIC_AUTH_USERNAME;
  const validPass = process.env.BASIC_AUTH_PASSWORD;

  if (!validUser || !validPass) {
    return NextResponse.json({ error: "Auth not configured" }, { status: 500 });
  }

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");

  const res = NextResponse.json({ ok: true });
  res.cookies.set("documind-auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
