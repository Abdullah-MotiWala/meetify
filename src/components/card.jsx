import React, { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    console.log("component mount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("component unmount");
    };
  }, []);

  //     useEffect(() => {
  //     console.log("component mount");
  //   }, [state]);
  return <div>This is the card</div>;
};

export default Card;
