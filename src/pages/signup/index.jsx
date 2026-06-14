import { useRef } from "react";
import supabase from "../../lib/supabase";

export default function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function signupClickhandler() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const result = await supabase.auth.signUp({ email, password });
    console.log(result);
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
      <button onClick={signupClickhandler}>Signup</button>
    </>
  );
}
