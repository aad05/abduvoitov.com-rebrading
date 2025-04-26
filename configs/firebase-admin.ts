import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const firebaseAdminApp =
	getApps().length === 0
		? initializeApp({
				credential: cert({
					projectId: process.env.FIREBASE_PROJECT_ID,
					clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
					privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
				}),
				storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			})
		: getApps()[0];

export const storage = getStorage(firebaseAdminApp).bucket();
