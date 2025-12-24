// import { auth } from "@/lib/firebase/client";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { supabase } from "@/lib/supabase/client";

// export async function googleSignIn() {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   const user = result.user;

//   // Check if user exists in Supabase
//   const { data: existing } = await supabase
//     .from("users")
//     .select("*")
//     .or(`google_uid.eq.${user.uid},email.eq.${user.email}`)
//     .single();

//   if (existing) {
//     // Existing user → go to app
//     return { redirect: true, path: "/me" };
//   } else {
//     // New user → go to account setup
//     return { redirect: true, path: "/AccountSetup" };
//   }
// }
