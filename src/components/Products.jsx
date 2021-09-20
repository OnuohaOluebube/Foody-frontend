import React, { useContext } from "react";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import { useStateValue } from "./Common/StateProvider";
import { Link } from "react-router-dom";
import ProductsContext from "./Common/ProductsProvider";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-right: 1rem;
  margin: 0 2rem;

  .productswrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    width: 100%;
    margin-left: 10px;
  }

  .banner {
    background: var(--primary);
    height: fit-content;
    width: 280px;
    margin-bottom: 3rem;
  }

  .banner img {
    width: 100%;
    object-fit: cover;
    height: 250px;
  }

  .banner p {
    font-size: 1.5rem;
    color: var(--white2);
    padding: 0.5rem;
  }
  .banner3 {
    /* border-right: 1px solid var(--primary); */
    border: 1px solid var(--primary);
  }
`;

const Productcontent = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  padding: 10px;
  border: 1px solid #3a5f0b;

  margin: 0 1.2rem 2rem 0.6rem;

  &:hover {
    box-shadow: 2px 2px 1px 2px #3a5f0b;
  }

  img {
    height: 180px;
    width: 100%;
    object-fit: cover;
    /* border-radius: 10px; */
  }
  .productdescription {
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 1rem;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 3px;
    margin-left: 0;
    line-height: 1.5rem;
  }

  strong {
    margin-bottom: 3px;
  }

  @keyframes shake {
    from {
      transform: translateX(-1px);
    }
    to {
      transform: translateX(1px);
    }
  }

  .bestseller {
    position: absolute;
    right: 15px;
    font-size: 1rem;
    width: fit-content;
    color: var(--primary);
    background: #90ee90c2;
    padding: 0.4em;
    border-radius: 0 10px 0 10px;
    /* border-radius: 5px; */
  }

  button {
    font-size: 0.5rem;
    background-color: #b9713b;
    color: white;
    border: none;
    width: 80%;
    padding: 0.3rem;
    margin-top: 3px;
    font-size: 1rem;
    cursor: pointer;
    :hover {
      animation: shake 0.1s linear 3;
    }
  }

  span {
    color: #3a5f0b;
    font-weight: bold;
    margin-left: 5px;
  }
`;

const Products = () => {
  const [action, dispatch] = useStateValue();
  const productsContext = useContext(ProductsContext);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // products: products,
      },
    });
  };

  const categorizedproduct = productsContext.selectedcategory
    ? productsContext.products.filter(
        (p) => p.category.id === productsContext.selectedcategory
      )
    : productsContext.products.slice(0, 10);

  return (
    <Wrapper>
      <div className="productswrapper">
        {categorizedproduct.map((product) => (
          <Productcontent key={product.id}>
            <p className="bestseller">Bestseller</p>
            <Link to="/ProductDetails">
              <img src={product.image} alt="" />

              <div className="productdescription">
                <h3>{product.title}</h3>
                <p>
                  Fresh from the farm unrefined best for a healthy living
                  <span>NATURAL!!! </span>
                </p>
                <div>
                  <p>Quantity:1kg</p>
                  <strong>#1000.00</strong>
                </div>
                <Rating onClick={() => {}} ratingValue={3} size={17} />
              </div>
            </Link>
            <button onClick={addToBasket}> Add to Cart</button>
          </Productcontent>
        ))}
      </div>
      <div className="banners">
        <div className="banner">
          <img src="/images/happyfarmer.jpg" alt="" />
          <p>
            Our Products are straight from the farm. Think Nature Think Foody
          </p>
        </div>
        <div className="banner">
          <img src="/images/homedeliveryy.png" alt="" />
        </div>
        <div className="banner banner3">
          <img src="/images/happyfamiy.jpg" alt="" />
          <p>Happy and Healthy family</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;
