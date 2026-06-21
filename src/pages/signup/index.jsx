import { useRef } from "react";
import supabase from "../../lib/supabase";
import "./style.css";

export default function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function signupClickhandler() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const result = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: "Abdullah Motiwala", age: 31 },
      },
    });
    console.log(result);
  }

  return (
    <>
      <input
        id="email"
        ref={emailRef}
        type="email"
        placeholder="Enter your Email"
        className="bg-light"
      />
      <input
        id="password"
        ref={passwordRef}
        type="password"
        placeholder="Enter your Password"
        style={{ backgroundColor: "red",  }}
      />
      <button onClick={signupClickhandler}>Signup</button>
    </>
  );
}
