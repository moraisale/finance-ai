// lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

const serviceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_EMAIL,
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.replace(/\\n/g, "\n"),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyIdToken = async (token: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    return null;
  }
};
