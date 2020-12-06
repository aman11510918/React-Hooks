import React, { useState, useEffect } from "react";
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
  
  // Read more on useState use
  // https://reactjs.org/docshooks-overviewhtml#declaring-multiple-state-variables
  */

  // setting up useEffect hook - Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("Inside use effect");
    return () => {
      console.log("inside useEffect cleanUp section i.e return function");
    };
  });

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
      <h1 className="countingBox"> {count} </h1>
      <br />
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
