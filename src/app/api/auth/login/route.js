import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const { email, password } = await request.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");

    const user = await db.collection("users").findOne({ email });
    if (!user) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
        { userId: user._id, name: user.name, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    const response = NextResponse.json({
        success: true,
        user: { name: user.name, email: user.email, role: user.role },
    });

    response.cookies.set("session_token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });

    return response;
}