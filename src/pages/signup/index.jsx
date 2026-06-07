import { useRef } from "react";

export default function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function signupClickhandler() {
    const email = emailRef.current.value;
    const pwd = passwordRef.current.value;
    console.log(email, pwd);
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