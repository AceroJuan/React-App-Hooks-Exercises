import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./SimpleForm.css";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {}, []);

  useEffect(() => {}, [formState]);

  useEffect(() => {}, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>SimpleForm - useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>

        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      {name === "Juan" && <Message />}
    </>
  );
};

export default SimpleForm;
