// import React, { useContext } from "react";
// import styled from "styled-components";
// import { device } from "./Common/Screensizes";
// import Title from "./Title";
// import ProductCategory from "./ProductCategory";

// import Products from "./Products";

// // import SeasonProducts from "./Seasonal";
// // import Partners from "./Partners";

// const Wrapper = styled.section`
//   padding: 3rem 2rem;
//   @media ${device.mobile} {
//     margin-top: 90px;
//     background: var(--white1);
//   }

//   .categorieswrapper {
//     display: flex;
//     /* padding-left: 10px; */

//     margin: 30px 10px;

//     flex-wrap: wrap;
//   }
//   .product {
//     display: grid;
//     grid-template-columns: 4fr 1fr;
//     margin-right: 2rem;
//   }
//   .productswrapper {
//     display: flex;
//     flex-direction: row;
//     -webkit-flex-wrap: wrap;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
//     width: 100%;
//     margin-left: 10px;
//   }

//   .banner {
//     background: var(--primary);
//   }

//   .banner img {
//     width: 100%;
//     object-fit: cover;
//     height: 250px;
//   }

//   .banner p {
//     font-size: 4rem;
//     color: var(--white2);
//   }
//   .titled {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 50px;
//     padding: 2rem 0;
//     background-color: var(--primary2);
//     color: #000000b4;

//     margin: 4rem 2rem 0 1.2rem;
//     font-size: 1.5rem;
//   }
// `;

// function Collection(props) {
//   // const [categories, setCategories] = useState([]);
//   // const [products, setProducts] = useState([]);
//   // const [productsinSeason, setProductsinSeason] = useState([]);
//   // const [selectedcategory, setSelectedcategory] = useState({});

//   // useEffect(() => {
//   //   const categories = getCategories();
//   //   setCategories(getCategories());
//   // }, []);

//   // useEffect(() => {
//   //   const products = getProducts();
//   //   setProducts(getProducts());
//   // }, []);

//   // useEffect(() => {
//   //   const productsinSeason = getProductsinSeason();
//   //   setProductsinSeason(getProductsinSeason());
//   // }, []);

//   // const handleCategoryselect = (category) => {
//   //   setSelectedcategory(category);
//   //   console.log(productsinSeason);
//   // };

//   // const categorizedproduct = selectedcategory.id
//   //   ? products.filter((p) => p.category.id === selectedcategory.id)
//   //   : products.slice(0, 10);

//   return (

//     // <Wrapper>

//     //   {/* <Title titlename=" Our Collections" />

//     //     <ProductCategory
//     //     // categories={categories}
//     //     // onCategoryselect={handleCategoryselect}
//     //     // selectedcategory={selectedcategory}
//     //     />
//     //   </div>

//     //   <Products />

//     //   {/*
//     //   <h4 className="titled">Selected Category Products</h4>

//     //       <Products
//     //       // products={categorizedproduct}
//     //       // categories={categories}
//     //       // selectedcategory={selectedcategory}
//     //       />

//     //     </div>

//     //   </div>

//     //   <div className="productsinseasonwrapper">
//     //     <SeasonProducts

//     //     // productsinseason={productsinSeason}
//     //     />
//     //   </div>
//     //   <div className="partners">
//     //     <Partners />
//     //   </div> */}
//     // </Wrapper> */}

//   );
// }

// export default Collection;
