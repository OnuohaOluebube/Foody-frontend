import React from "react";
import styled from "styled-components";
import { device } from "./Common/Screensizes";

function Title({ titlename }) {
  const Title = styled.h2`
    color: #3a5f0b;
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    padding-left: 1rem;
    font-size: 3rem;
    margin-bottom: 1rem;

    ::before {
      content: " ";
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      bottom: -20%;
      left: 5%;
      background-color: #b9723b8b;
    }

    ::after {
      content: "";
      border-top: 2px solid #3b5f0bc0;
      position: absolute;
      width: 70px;
      left: 100%;
      top: 60%;
      margin: 0 10px;
    }
  `;

  return (
    <div>
      <Title>{titlename}</Title>
    </div>
  );
}

export default Title;
