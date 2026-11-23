import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const error = request.nextUrl.searchParams.get("error");
  const savedState = request.cookies.get("polar_oauth_state")?.value;
  if (error) return NextResponse.redirect(new URL("/settings?polar=error", request.url));
  if (!code || !state || !savedState || state !== savedState) {
    return NextResponse.redirect(new URL("/settings?polar=invalid_state", request.url));
  }
  // Token exchange and secure persistence must use the documented AccessLink token endpoint.
  // This branch intentionally does not invent endpoints or credentials in a browser.
  return NextResponse.redirect(new URL("/settings?polar=exchange_unverified", request.url));
}
