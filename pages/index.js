import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import Link from "next/link";
import SignUp from "../components/SignUp";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div
      className="container"
      style={{
        padding: "50px 0 100px 0",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!session ? (
        <SignUp />
      ) : (
        <div>
          <Account session={session} />
        </div>
      )}

      <Link href="/protected/dashboard">
        <a>Go to dashboard</a>
      </Link>
    </div>
  );
};

export default Home;
