import { NextResponse } from "next/server";
import { demoDays, demoWorkouts } from "@/lib/fixtures";

export async function GET() {
  return new NextResponse(JSON.stringify({ dataType: "demo", demoDays, demoWorkouts }, null, 2), {
    headers: { "content-type": "application/json", "content-disposition": "attachment; filename=polar-tracker-demo.json" },
  });
}
