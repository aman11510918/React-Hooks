import React, { useState, useEffect } from "react";

export const Main = () => {
  /* 
  setting up the state variable with useState with function call as a initial value
  */
  const countValue = () => {
    return 0;
  };
  const [count, setCount] = useState(() => countValue());

  /*
   setting up state variable using useState and integer value
   instead of integer value you can use any value such as,
   string, boolean etc..
   */
  const [isVisible, setIsVisible] = useState(true);

  /*
  setting up useEffect hook - Similar to componentDidMount
  */
  useEffect(() => {
    console.log("studiousTribe-01");
  }, []);

  /*
  setting up useEffect hook - Similar to componentDidMount and componentDidUpdate,
  By default, it runs both after the first render and after every update.
  */
  useEffect(() => {
    console.log("studiousTribe-02");
  });

  /*
  setting up useEffect hook - Similar to componentDidMount and componentDidUpdate
  and componentWillUnmount
  */
  useEffect(() => {
    console.log("studiousTribe-03");

    // this return function is called on unmount after this call
    // normal useEffect is also executed
    return () => {
      console.log("inside useEffect-03 cleanUp section");
    };
  });

  /*
  setting up useEffect hook - Similar to 
  componentDidMount and 
  conditional componentDidUpdate and 
  componentWillUnmount
  */
  useEffect(() => {
    console.log("studiousTribe-04");
    return () => {
      console.log("inside useEffect-04 cleanUp section");
    };
    /*
    second argument of array let the useEffect run whenever
    this IsVisible variable is changed if isVisible is not
    changed it will be called only once at the time of
    first render.  
    */
  }, [count]);

  /*
  useEffect always run in the sequence in which
  they were written, even when unmounted or changes 
  occur all cleanup run first in the sequence after 
  that all useEffect's is run again in a sequence
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
