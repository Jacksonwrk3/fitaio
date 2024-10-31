import { createClient } from "@/app/util/supabase/server";
import { NextResponse } from "next/server";
export async function GET() {
  const supabase = createClient();
  console.log("Inside exercise");
  const { data, error } = await supabase.from("exercise").select().limit(10);
  return NextResponse.json({ data }, { status: 200 });
}
