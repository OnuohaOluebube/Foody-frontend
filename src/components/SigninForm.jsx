import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Joi, { contain } from "joi-browser";
import InputForm from "./inputform";

const Wrapper = styled.div`
  margin: 0;
  height: 100vh;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    width: 30%;
    height: 70vh;
    margin: auto;
  }

  form > label {
    display: flex;
    font-weight: 500;
    margin-top: 10px;
    font-size: 1.2rem;
  }

  form > input {
    margin: 0;
    font-size: 1rem;

    padding: 0.4rem;
  }
  input[type="submit"]:disabled {
    color: red;
  }

  form > button {
    font-size: 1.2rem;
    margin-top: 10px;
    background: #b9713b;
    border: none;
    padding: 5px 0;
  }

  form :last-child {
    background: white;
    border: 1px solid #3a5f0b;
    padding: 0.5rem;
  }
  form > p {
    font-size: 1rem;
    display: flex;
    text-align: start;
    padding: 0.7rem 0;
  }

  input[type="checkbox"] {
    margin: 0.5rem;
    margin-left: 0;
  }
  .signinfooter span {
    margin-right: 2rem;
    color: blue;
  }
`;

const Logo = styled.p`
  margin-top: 0;
  font-weight: bold;
  padding: auto;
  background: var(--primary);
  font-size: 2.5rem;
  height: 11vh;

  .logo1 {
    color: #b9713b;
    font-style: italic;
  }

  .logo2 {
    color: white;
  }
`;

const SigninForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const result = Joi.validate(data, schema, { abortEarly: false });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };

    const fieldSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, fieldSchema);

    return error ? error.details[0].message : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate());

    if (errors) return;
  };

  const handleChange = ({ target: input }) => {
    setData({ ...data, [input.name]: input.value });

    const errorsTemp = { ...errors };

    const errorMessage = validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) {
      errorsTemp[input.name] = errorMessage;
    } else {
      delete errorsTemp[input.name];
    }
    setErrors(errorsTemp);
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <span className="logo1">
            F<span className="logo2">oo</span>dy
          </span>
        </Logo>
      </Link>
      <form onSubmit={handleSubmit}>
        <InputForm
          name="username"
          value={data.username}
          label="Username"
          type="text"
          error={errors.username}
          onChange={handleChange}
        />
        <InputForm
          name="password"
          value={data.password}
          type="password"
          label="Password"
          error={errors.password}
          onChange={handleChange}
        />
        <button type="submit" disabled={validate()}>
          Sign in
        </button>
        <p>
          <input type="checkbox" />
          By signing up you agree to the Foody Conditions of Use & Sale. Please
          see our Privacy.please see our privacy see our privacy please see our
          privacy
        </p>
        <button>Create Account</button>
      </form>

      <div className="signinfooter">
        <span>Condition of use</span>
        <span>privacy Notice</span>
        <span>Help</span>
      </div>
    </Wrapper>
  );
};
export default SigninForm;
