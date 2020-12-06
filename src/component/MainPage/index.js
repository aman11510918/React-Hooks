import React, { useState } from "react";
import "./styles.css";

export const Main = () => {
  // setting up the state variable with useState and function call
  const countValue = () => {
    return 0;
  };
  const [count, setCount] = useState(() => countValue());

  /*
  // setting up state variable using useState and value
  const [count, setCount] = useState(0);
  */

  // handling increase count button click function
  const onHandleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // handling reset count button click function
  const onHandleReset = () => {
    setCount(0);
  };

  return (
    <React.Fragment>
      <h1>Hello, You're seeing me from MainPage functional component</h1>
      <h1 className="countingBox">{count}</h1>
      <button className="button" onClick={() => onHandleIncrease()}>
        Increase Count
      </button>
      <br />
      <br />
      <button className="button" onClick={() => onHandleReset()}>
        Reset Count
      </button>
    </React.Fragment>
  );
};

export default Main;
