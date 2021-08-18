import React, { useState } from "react";
import "./Counter.css";
// import PropTypes from 'prop-types'

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  const { counter1, counter2 } = state;

  const handleAdd = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };
  //   const handleSubtract = () => {
  //     setCounter(counter1 - 1);
  //   };
  return (
    <>
      {/* <h1>Counter {counter}</h1> */}
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleAdd}>
        + 1
      </button>
      {/* <button className="btn btn-primary" onClick={handleSubtract}>
        - 1
      </button> */}
    </>
  );
};

// CounterApp.propTypes = {

// }

export default CounterApp;
