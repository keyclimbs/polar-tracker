import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";

export async function GET() {
  const clientId = process.env.POLAR_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({
      state: "missing-credentials",
      message: "Add POLAR_CLIENT_ID and POLAR_CLIENT_SECRET in the server environment.",
    }, { status: 503 });
  }
  const state = randomBytes(24).toString("hex");
  const verifier = randomBytes(32).toString("base64url");
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: process.env.POLAR_REDIRECT_URI || "http://localhost:3000/api/polar/callback",
    state,
  });
  const response = NextResponse.redirect(`https://www.polar.com/accesslink-api/oauth2/authorize?${params}`);
  response.cookies.set("polar_oauth_state", state, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 600 });
  response.cookies.set("polar_pkce_verifier", verifier, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 600 });
  return response;
}
