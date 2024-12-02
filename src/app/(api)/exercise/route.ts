import { createClient } from "@/app/util/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Fetches a list of exercises from the Supabase database based on a search query.
 *
 * This handler processes GET requests to retrieve exercises from the `exercise` table.
 * It uses the `name` query parameter to perform a case-insensitive search on the `exercise` column.
 * If no `name` parameter is provided, it returns an empty array. Results are limited to 5 entries.
 *
 * @param {NextRequest} req - The incoming request object from Next.js.
 *   - The query parameter `name` is used to search for exercises.
 * @returns {Promise<NextResponse>} - A JSON response containing either:
 *   - `exercises` - An array of matching exercises (if `name` is provided and matches are found).
 *   - `exercise` - An empty array (if `name` is not provided).
 *   - `message` - An error message (if a server-side error occurs).
 *
 * @example
 * // GET /api/exercises?name=push
 * // Response (success):
 * {
 *   "exercises": [
 *     { "id": 1, "exercise": "Push-Up", "category": "Strength" },
 *     { "id": 2, "exercise": "Push Press", "category": "Strength" }
 *   ]
 * }
 *
 * @example
 * // GET /api/exercises (missing `name` parameter)
 * // Response:
 * {
 *   "exercise": []
 * }
 *
 * @example
 * // Server error example:
 * // Response:
 * {
 *   "message": "Error message from Supabase"
 * }
 */
export async function GET(req: NextRequest) {
  const supabase = createClient();
  try {
    const searchParams = req.nextUrl.searchParams;
    const name = searchParams.get("name");
    // If name param value not provided, return an empty array
    if (!name) {
      return NextResponse.json({ exercise: [], error: null });
    } else {
      const { data, error } = await supabase
        .from("exercise")
        .select()
        .ilike("exercise", `%${name}%`)
        .range(0, 5);

      if (error) {
        throw new Error(error.message);
      } else {
        return NextResponse.json(
          { exercises: data, error: null },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json(
      { exercises: null, error: error.message },
      { status: 500 }
    );
  }
}
