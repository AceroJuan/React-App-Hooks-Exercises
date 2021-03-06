import React, { useState } from "react";
import MultipleCustomHooks from "../03 -examples/MultipleCustomHooks";
import "./styles.css";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        show - hide
      </button>
    </>
  );
};

export default RealExampleRef;
