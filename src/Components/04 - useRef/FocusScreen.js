import React, { useRef } from "react";
import "./styles.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input className="form-control" placeholder="nombre" ref={inputRef} />
      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
