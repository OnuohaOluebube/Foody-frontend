import React, { Component, useState, useEffect } from "react";

import "./App.css";

import { Redirect, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import SigninForm from "./components/SigninForm";
import Footer from "./components/footer";
import { getCategories } from "./components/utils/getProductCategories";
import { getProducts } from "./components/utils/getProducts";
import { getProductsinSeason } from "./components/utils/getProductsinseason";
import { getOurpartners } from "./components/utils/getOurPartners";
import ProductDetails from "./components/ProductDetails";
import ProductsContext from "./components/Common/ProductsProvider";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsinSeason, setProductsinSeason] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState(null);
  const [ourPartners, setOurpartners] = useState([]);

  useEffect(() => {
    const categories = getCategories();
    setCategories(categories);
  }, []);

  useEffect(() => {
    const products = getProducts();
    console.log(products[0].title);
    setProducts(products);
  }, []);

  useEffect(() => {
    const productsinSeason = getProductsinSeason();
    setProductsinSeason(productsinSeason);
  }, []);

  useEffect(() => {
    const ourPartners = getOurpartners();
    setOurpartners(ourPartners);
  }, []);

  const handleCategoryselect = (category) => {
    setSelectedcategory(category);
  };

  console.log(ourPartners);

  return (
    <div className="App">
      <ProductsContext.Provider
        value={{
          categories: categories,
          products: products,
          productsinSeason: productsinSeason,
          selectedcategory: selectedcategory,
          ourPartners: ourPartners,
          onCategorySelect: handleCategoryselect,

          // categorizedproduct: categorizedproduct,
        }}
      >
        <Switch>
          <Route path="/Checkout">
            <NavBar />
            <Checkout />
          </Route>
          <Route path="/SigninForm">
            <SigninForm />
          </Route>
          <Route path="/ProductDetails">
            <NavBar />
            <ProductDetails />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
