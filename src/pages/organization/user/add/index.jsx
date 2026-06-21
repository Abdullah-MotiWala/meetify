import React, { useRef, useState } from "react";
import supabase from "../../../../lib/supabase";
import "./style.css";

function UserAddPage() {
  const [value, setValue] = useState("Abdullah");
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  console.log("===render");
  const emailRef = useRef();
  const nameRef = useRef();
  // let userName = "Abdullah";

  async function inviteHandler() {
    // userName = "Mohd. Abdullah";
    // setValue("Mohd. Abdullah");
    // const email = emailRef.current.value;
    // const first_name = nameRef.current.value;
    // const result = await supabase.auth.admin.inviteUserByEmail(email, {
    //   data: {
    //     first_name,
    //   },
    // });
    // console.log(result, "===result");
  }

  // function handleCount() {
  //   setCount(count + 1);
  //   // console.log(count)
  //   setCount(count + 2);
  //   setCount(count + 3);
  // }

  // function handleCheck() {
  //   // console.log(userName);
  // }

  // let error = false;

  function changeHandler(e) {
    const value = e.target.value;
    if (value.includes(" ")) {
      // error = true;
      setError(true);
      console.log("space found");
    }
    if (!value.includes(" ")) {
      setError(false);
    }
    console.log(value, "===changing");
  }

  return (
    <div>
      <input type="text" ref={emailRef} name="email" placeholder="Email" />
      <div>
        <input
          type="text"
          name="username"
          // ref={nameRef}
          placeholder="UserName"
          onChange={changeHandler}
        />
        {/* {(error) ? (
          <p className="error">Username should not have space</p>
        ) : null} */}
        {error && <p className="error">Username should not have space</p>}
      </div>
      {/* {value}
      <button onClick={inviteHandler}>Invite</button>
      <button onClick={handleCheck}>Check username</button>
      <button onClick={handleCount}>Count</button>
      <p>{count}</p> */}
    </div>
  );
}

export default UserAddPage;
