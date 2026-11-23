import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ status: "demo", message: "Demo sync complete; no live Polar request was made.", lastSuccessfulSync: "2026-10-30T15:24:00Z" });
}
