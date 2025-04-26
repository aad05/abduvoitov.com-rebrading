import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;

	const { data: parentBlog, error: parentError } = await supabase
		.from("blogs")
		.select("id")
		.eq("slug", slug)
		.single();

	if (parentError || !parentBlog)
		return NextResponse.json(
			{ error: "Parent blog not found" },
			{ status: 404 },
		);

	const { data, error } = await supabase
		.from("blogs")
		.select("*")
		.eq("parent_id", parentBlog.id)
		.order("created_at", { ascending: false });

	if (error)
		return NextResponse.json({ error: error.message }, { status: 500 });

	return NextResponse.json(data);
}
