import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./styles.css";

const UseLayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const [boxsize, setBoxsize] = useState({});

  const parragraphTag = useRef();

  useLayoutEffect(() => {
    setBoxsize(parragraphTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Use Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-end">
        <p className="mb-3" ref={parragraphTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxsize, null, 3)}</pre>

      <button className="btn btn-primary text-capitalize" onClick={increment}>
        next quote
      </button>
    </>
  );
};

export default UseLayoutEffect;
