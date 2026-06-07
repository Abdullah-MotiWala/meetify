import { useRef } from "react";
import { useNavigate } from "react-router";

export default function SignInPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()

  function signinClickhandler() {
    const email = emailRef.current.value;
    const pwd = passwordRef.current.value;

    if (email === "test@saylani.com" && pwd === "Password@123") {
      alert("Login Successfully");
      navigate("/")
    } else {
      alert("Credentials not found");
    }
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
