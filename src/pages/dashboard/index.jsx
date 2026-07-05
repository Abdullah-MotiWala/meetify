import { useEffect, useState } from "react";
import Card from "../../components/card";

export default function DashboardPage() {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  function logs() {
    console.log("===update");
  }
  console.log("===rerender");
  // logs();

  // componentDidUpdate, componentDidMount, componentWillUnmount

  // componentDidUpdate
  // useEffect(() => {
  //   logs();
  // }, [state]);

  // componentDidMount;
  useEffect(() => {
    logs();
    fetchData();
    return () => {};
  }, []);

  let usersData = [];

  const fetchData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET",
        headers: {
          "x-api-key": "aslkdjfayuio39",
          "Content-type": "application/json",
        },
      },
      //    {
      //   method: "PATCH",
      //   body: JSON.stringify(),
      //   headers: {
      //     authorization: 123,
      //   },
      // }
    );
    console.log(res, "===result");
    const data = await res.json();
    setData(data);
    // const res = await fetch("https://dummyjson.com/products");
    // const data = await res.json();
    // console.log(data, "data");
  };

  // useEffect(() => {
  //   fetchData();
  // });

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const handleClick = () => {
    setState(!state);
  };
  const handleUpdate = () => {
    setLoading(!loading);
  };
  return (
    <>
      <h1>
        Dashboard
        {/* {state && <div>Hello World</div>} */}
      </h1>

      {data.length ? (
        <div>
          {data.map(({ username, email, name, website, id }) => {
            return (
              <div style={{ border: "1px solid " }} key={id}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{name}</p>
                <p>{website}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading</p>
      )}
      {/* <button onClick={handleClick}>Refresh</button>
      <button onClick={handleUpdate}>Loading</button>
      {!loading && <Card />} */}
    </>
  );
}
