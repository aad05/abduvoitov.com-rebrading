import { supabase } from "@/configs/supabase";
import { NextResponse } from "next/server";

export async function GET() {
	const { data, error } = await supabase
		.from("blogs")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json(data);
}
