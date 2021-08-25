import React from "react";
import useFetch from "../../hooks/useFetch";
import "./styles.css";

const MultipleCustomHooks = () => {
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/1`
  );

  console.log("data", data);
  const { quote, author, series } = !!data && data[0];
  console.log(quote, author, series);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">
            {author} | {series}
          </footer>
          <button className="btn btn-primary text-capitalize">
            next quote
          </button>
        </blockquote>
      )}
    </>
  );
};

export default MultipleCustomHooks;
