// import { storage } from "@/configs/firebase-admin";
import { type NextRequest, NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
	return NextResponse.json({ url: "hello" });

	// Check if the content type is multipart/form-data
	// const contentType = req.headers.get("content-type") || "";

	// if (!contentType.includes("multipart/form-data")) {
	// 	return NextResponse.json(
	// 		{ error: "Invalid content-type, expected multipart/form-data" },
	// 		{ status: 400 },
	// 	);
	// }

	// const formData = await req.formData();
	// const file = formData.get("file") as File | null;

	// if (!file) {
	// 	return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
	// }

	// const bytes = await file.arrayBuffer();
	// const buffer = Buffer.from(bytes);

	// const filename = `blogs/${uuidv4()}-${file.name}`;
	// const fileRef = storage.file(filename);

	// await fileRef.save(buffer, {
	// 	metadata: {
	// 		contentType: file.type,
	// 	},
	// 	public: true,
	// 	resumable: false,
	// });

	// const publicUrl = `https://storage.googleapis.com/${process.env.FIREBASE_STORAGE_BUCKET}/${filename}`;

	// return NextResponse.json({ url: publicUrl });
}
