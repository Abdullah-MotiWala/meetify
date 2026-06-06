// import { Fragment as MyFragment } from "react";

import { useRef } from "react";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  function signupClickhandler() {
    const email = emailRef.current.value
    const pwd = passwordRef.current.value
    console.log(emailRef.current,email, pwd);
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

export default App;
