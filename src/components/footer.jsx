import React, { Component } from "react";
import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.footer`
    width: 100%;
    height: 100px;
    background-color: var(--primary);
    margin-top: 100px;

    .wave {
    }

    .wave::before {
      content: "";
    }

    .wave::after {
      content: "";
    }
  `;

  return (
    <Wrapper>
      <div className="wave"></div>
      <div className="circleline"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </Wrapper>
  );
};

export default Footer;
