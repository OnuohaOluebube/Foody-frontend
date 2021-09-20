import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";
import ProductCategory from "./ProductCategory";
import Hero from "./Hero";
import Products from "./Products";
import Partners from "./Partners";
import SeasonProducts from "./Seasonal";

const Wrapper = styled.div``;
const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <ProductCategory />
      <Products />
      <SeasonProducts />
      <Partners />
    </Wrapper>
  );
};

export default Home;
