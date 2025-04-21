"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalError({
	error,
	reset,
}: { error: Error; reset: () => void }) {
	const router = useRouter();

	useEffect(() => {
		console.error("Global error:", error);
	}, [error]);

	return (
		<html lang="en">
			<body className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
				<h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
				<p className="text-muted-foreground mb-6">{error.message}</p>
				<div className="flex gap-4">
					<Button onClick={() => reset()}>Try Again</Button>
					<Button variant="secondary" onClick={() => router.push("/")}>
						Go Home
					</Button>
				</div>
			</body>
		</html>
	);
}
