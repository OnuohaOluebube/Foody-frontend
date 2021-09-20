import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  background: var(--primary2);
  margin-bottom: 1rem;

  /* background: ${(props) => (props.primary ? "#337ab7" : "#fff")}; */

  h4 {
    color: #000000b4;
    margin-right: 10px;
    font-size: 1.6rem;
  }
  span {
    font-size: 1.2rem;
    color: var(--primary);
    font-weight: bold;
  }
`;
const TitleBanner = ({ title, linkText, linkTo, primary }) => {
  return (
    <Title>
      <h4>{title}</h4>
      {linkText && (
        <Link to={linkTo}>
          <span>{linkText}</span>
        </Link>
      )}
    </Title>
  );
};

export default TitleBanner;
