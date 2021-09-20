import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "./Common/Screensizes";
import TitleBanner from "./Titlebanner";
import ProductsContext from "./Common/ProductsProvider";

const Wrapper = styled.div`
  height: 330px;
  background-color: white;
  margin: 0 3rem;
  margin-top: 3rem;

  position: relative;

  &:hover {
    .slick-prev,
    .slick-next {
      display: block;
      height: 70px;
      box-shadow: 0 1px 4px #888;

      width: 30px;
      margin: auto;
      position: absolute;
      bottom: 30%;
      outline: none;
    }

    .slick-prev::before,
    .slick-next::before {
      color: #b9713b;
      display: block;
    }
  }

  .slick-prev,
  .slick-next {
    display: none;
  }

  .slick-prev {
    left: 0;
    z-index: 10;
  }
  .slick-next {
    right: 1%;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .imageSlider {
    width: 230px;
    height: 240px;

    padding: 1rem;
    border: 1px solid var(--secondary2);
    border-radius: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 11px;
    margin-top: 0.6rem;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: 130px;
    background-color: white;
  }

  /* .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin-left: 0;
    padding-top: 2rem;
    padding-bottom: 2.2rem;
    background-color: var(--primary2);
  } */

  h4 {
    color: #000000b4;
    margin-right: 10px;
  }
  a {
    font-size: 12px;
    text-decoration: inherit;
    color: #d4fca1;
  }

  .productdescription {
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    text-align: start;
    margin-left: 5px;
  }

  h5 {
    margin: 0;
    font-size: 13px;
  }
  p {
    margin: 0;
    font-size: 1rem;
  }

  .pricecut {
    position: absolute;
    top: 1%;
    right: 2%;
    background: #b9723b8b;
    font-size: 12px;
    color: #b9713b;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 0 25px 0 0;
  }
`;

function SeasonProducts({ productsinseason }) {
  const pinseasonContext = useContext(ProductsContext);
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    autoplayspeed: 10000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <Wrapper>
      <div className="title">
        <TitleBanner
          title="Products in Season"
          linkText="Shop now!!!"
          linkTo="/shop"
          primary={true}
        />
      </div>
      <Slider {...settings}>
        {pinseasonContext.productsinSeason
          ? pinseasonContext.productsinSeason.map((pinseason) => (
              <div className="productslider">
                <div className="imageSlider">
                  <img src={pinseason.image} alt={pinseason.title} />

                  <p className="pricecut">{`-${pinseason.pricecut}%`}</p>
                  <div className="productdescription">
                    <p>{pinseason.title}</p>
                    <h5>
                      <span>&#8358;</span>
                      {pinseason.newprice}
                    </h5>
                    <s>
                      <span>&#8358;</span>
                      {pinseason.oldprice}
                    </s>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </Slider>
    </Wrapper>
  );
}

export default SeasonProducts;
