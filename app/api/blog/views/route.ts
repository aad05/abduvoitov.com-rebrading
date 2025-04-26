import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
	try {
		const { slug } = await req.json();

		if (!slug) {
			return NextResponse.json(
				{ error: "Blog slug is required" },
				{ status: 400 },
			);
		}

		const { data: blog, error: fetchError } = await supabase
			.from("blogs")
			.select("views")
			.eq("slug", slug)
			.single();

		if (fetchError || !blog) {
			return NextResponse.json({ error: "Blog not found" }, { status: 404 });
		}

		const { error: updateError } = await supabase
			.from("blogs")
			.update({ views: blog.views + 1 })
			.eq("slug", slug);

		if (updateError) {
			return NextResponse.json({ error: updateError.message }, { status: 500 });
		}

		return NextResponse.json({ message: "View count updated successfully" });
	} catch (error) {
		console.error("Error updating views:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
