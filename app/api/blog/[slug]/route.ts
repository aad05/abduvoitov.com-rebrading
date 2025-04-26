import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;

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

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;
	const body = await req.json();
	const { content } = body;

	if (!content) {
		return NextResponse.json(
			{ error: "Content is required." },
			{ status: 400 },
		);
	}

	const { error } = await supabase
		.from("blogs")
		.update({ content })
		.eq("slug", slug);

	if (error) {
		return NextResponse.json(
			{ error: "Failed to update blog." },
			{ status: 500 },
		);
	}

	return NextResponse.json({ message: "Blog updated successfully." });
}
