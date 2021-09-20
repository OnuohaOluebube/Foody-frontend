import React, { Component } from "react";
import styled from "styled-components";

const Errorcontainer = styled.div`
  color: red;
  border: 1px solid #3a5f0b;
  background: #f1d5bf60;
  padding: 5px;
  text-align: start;
  font-size: 1rem;
`;

const InputForm = ({ name, label, onChange, type, value, error }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <Errorcontainer>{error}</Errorcontainer>}
    </>
  );
};

export default InputForm;
