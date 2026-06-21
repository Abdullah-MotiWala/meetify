import { useRef } from "react";
import { useNavigate } from "react-router";
import supabase from "../../lib/supabase";

export default function SignInPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function signinClickhandler() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const result = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(result, "===result");

    // if (email === "test@saylani.com" && pwd === "Password@123") {
    //   alert("Login Successfully");
    //   navigate("/");
    // } else {
    //   alert("Credentials not found");
    // }
  }

  return (
    <>
      <input
        id="email"
        ref={emailRef}
        type="email"
        placeholder="Enter your Email"
      />
      <input
        id="password"
        ref={passwordRef}
        type="password"
        placeholder="Enter your Password"
      />
      <button onClick={signinClickhandler}>Signin</button>
    </>
  );
}
