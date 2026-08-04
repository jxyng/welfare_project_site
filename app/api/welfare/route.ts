import welfare from "@/data/welfare.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: welfare.length,
    data: welfare,
  });
}
