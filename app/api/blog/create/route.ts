import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { title, slug, content, lang, parent_slug } = body;

	if (!title || !slug || !content || !lang) {
		return NextResponse.json(
			{ error: "Missing required fields" },
			{ status: 400 },
		);
	}

	let parent_id = null;

	if (parent_slug) {
		const { data: parentBlog } = await supabase
			.from("blogs")
			.select("id")
			.eq("slug", parent_slug)
			.single();

		parent_id = parentBlog?.id ?? null;
	}

	const { data, error } = await supabase
		.from("blogs")
		.insert({
			title,
			slug,
			content,
			lang,
			parent_id,
		})
		.select()
		.single();

	if (error)
		return NextResponse.json({ error: error.message }, { status: 500 });

	return NextResponse.json(data, { status: 201 });
}
