import { createClient } from "@/app/util/supabase/server";
import { NextResponse, type NextRequest } from "next/server";
//Initialize supabase client

export async function GET(req: NextRequest) {
  const supabase = createClient();
  try {
    const searchParams = req.nextUrl.searchParams;
    const name = searchParams.get("name");
    //If name param value not provided return an error
    if (!name) {
      return NextResponse.json(
        { message: "Search value is required" },
        { status: 400 }
      );
    } else {
      const { data, error } = await supabase
        .from("exercise")
        .select()
        .ilike("exercise", `%${name}%`)
        .range(0, 5);

      if (error) {
        throw new Error(error.message);
      } else {
        return NextResponse.json({ exercise: data }, { status: 200 });
      }
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
