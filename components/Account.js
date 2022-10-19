import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    console.log("session", session);
    console.log("user", user);
  });

  return (
    <div>
      <h1>Account</h1>
      <p>Username: {user.email}</p>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  );
}
