import { NextRequest, NextResponse } from "next/server";
import { verifyIdToken } from "../../../../lib/firebaseAdmin";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Sem token" }, { status: 401 });
  }

  try {
    const decoded = await verifyIdToken(token);
    return NextResponse.json({
      uid: decoded?.uid,
      email: decoded?.email,
    });
  } catch (error) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }
}
