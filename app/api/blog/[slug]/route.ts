import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;

	const { data, error } = await supabase
		.from("blogs")
		.select("*")
		.eq("slug", slug)
		.single();

	if (error)
		return NextResponse.json({ error: "Blog not found" }, { status: 404 });

	return NextResponse.json(data);
}
