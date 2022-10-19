import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function SignUp() {
  const supabase = useSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [signingUp, setSigningUp] = useState(true);

  function handleFormSubmit(e) {
    let error, data;
    e.preventDefault();

    if (signingUp) {
      const { data, error } = supabase.auth.signUp({ email, password });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Check your email for the login link");
      }
    } else {
      const { data, error } = supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      }
    }
  }

  if (signingUp) {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleFormSubmit}
      >
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Create your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
        <a
          onClick={() => {
            setSigningUp(false);
          }}
          style={{ cursor: "pointer" }}
        >
          Already have an account? Click here to sign in
        </a>
        <p>{message}</p>
      </form>
    );
  } else {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleFormSubmit}
      >
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign In</button>
        <a
          onClick={() => {
            setSigningUp(true);
          }}
          style={{ cursor: "pointer" }}
        >
          Don't have an account? Click here to sign up
        </a>
        <p>{message}</p>
      </form>
    );
  }
}
