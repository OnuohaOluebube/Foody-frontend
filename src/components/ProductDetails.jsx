import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  p {
    height: 100px;
    background: blue;
  }
`;

const ProductDetails = () => {
  //   const [{ basket }, dispatch] = useStateValue();
  return (
    <Wrapper>
      <p>
        This is a Product details page This is a Product details page This is a
        Product details page This is a Product details page This is a Product
        details page This is a Product details page This is a Product details
        page
      </p>
    </Wrapper>
  );
};

export default ProductDetails;
