import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { slug: string } },
) {
	const { slug } = params;

	// Get search params from URL
	const { searchParams } = new URL(req.url);
	const lang = searchParams.get("lang")?.toUpperCase() || "UZ";

	const { data, error } = await supabase
		.from("blogs")
		.select("*")
		.eq("slug", slug)
		.eq("lang", lang) // filter by lang too
		.single();

	if (error) {
		return NextResponse.json({ error: "Blog not found" }, { status: 404 });
	}

	return NextResponse.json(data);
}
