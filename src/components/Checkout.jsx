import React, { Component } from "react";
import styled from "styled-components";
import { useStateValue } from "./Common/StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  const Wrapper = styled.div``;

  return (
    <Wrapper>
      <div className="leftcol">
        {basket.length !== 0 ? (
          <img
            src="/images/fullshoppingbasket.jpg"
            alt="Full Shopping Basket"
          />
        ) : (
          "this Basket is empty"
        )}
      </div>
      <div className="rightcol"></div>
    </Wrapper>
  );
};

export default Checkout;
