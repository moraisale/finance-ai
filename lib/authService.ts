// lib/authService.ts
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { setCookie } from "cookies-next";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const token = await user.getIdToken();
  setCookie("token", token, { maxAge: 60 * 60 * 24 });

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      createdAt: new Date(),
    });
  }

  return user;
};
