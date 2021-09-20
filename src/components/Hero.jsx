import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./Common/Screensizes";

function Hero(props) {
  const Wrapper = styled.section`
    height: cal(100vh - 11vh);
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 0;
    padding-top: 5rem;
    background-image: linear-gradient(to right, var(--white2), var(--white1));
    @media ${device.tablet} {
      height: calc(100vh - 18vh);
      padding: 0;
    }

    .lefthand-col {
      margin-top: 0;
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      color: black;

      @media ${device.tablet} {
        display: flex;

        position: absolute;
        top: 45%;
        width: 100%;
      }
    }

    .description {
      /* height: 258px; */

      margin-left: 3rem;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    p {
      margin: 0;
      /* line-height: 22px; */
      color: var(--black);
      text-align: left;
      font-size: 1.5rem;
      font-weight: bold;
      @media ${device.tablet} {
        font-size: 1.7rem;
      }
    }

    button {
      margin: 1rem 0;
      margin-bottom: 2.5rem;
      font-size: 1rem;
      padding: 0.6rem 1rem;
      color: var(--white1);
      background-color: var(--secondary);
      border: 0;
      box-shadow: 7px 7px var(--primary2);

      @media ${device.mobile} {
        padding: 10px;
        font-size: 14px;
        border-radius: 2px;
      }
    }
    .lightbox {
      display: flex;
      width: 90%;
      padding: 0.1rem 0;
      padding-left: 1.7rem;
      background-color: var(--primary2);
      height: fit-content;

      @media ${device.tablet} {
        display: none;
      }
    }
    .lightboxdescription {
      display: flex;
      flex-direction: column;
      padding: 0 5px 0 20px;
      font-size: 1.8rem;
    }

    .lightboximage {
      width: 100px;
      height: 70px;
      margin: 10px 15px;
      object-fit: cover;
      border-radius: 10px;
    }
    h6 {
      margin: 5px 0;
      display: flex;
    }
    .lightboxdescription span {
      color: var(--primary);
      font-size: 1.05rem;
      padding-left: 0.5rem;
    }
    h1 {
      display: flex;
      margin: 0.9rem 0;
      text-align: start;
      font-size: 6rem;
      line-height: 5.5rem;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      color: var(--primary);
    }
    .lightboxdescription p {
      font-size: 1rem;
    }
    .right-col {
      display: flex;
      width: 44%;

      height: 64vh;
      @media ${device.tablet} {
        width: 100%;
        height: 46vh;
        margin: 0;
      }
    }
    .right-col img {
      object-fit: cover;
      height: 100%;
      width: 90%;
      border-bottom: 1rem solid var(--primary);
      border-left: 1rem solid var(--primary);
      border-right: 1rem solid var(--primary);
      transform: rotate(295deg);

      @media ${device.tablet} {
        border: 0;
        width: 100%;
        transform: rotate(0);
        border-bottom: 1rem solid var(--primary);
      }
    }
  `;

  /* @media ${device.mobile} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
   
   
     } */

  /* .homeimage {
      width: 70%;
      height: 60vh;
      backdrop-filter: blur(10px);
      /* border-radius: 50%;
      border: 1px solid #c7e2a42d; */
  /* @media ${device.mobile} {
        width: 80%;
        height: 300px;
        position: relative;
        bottom: 28%;
      } */

  return (
    <div>
      <Wrapper>
        <div className="lefthand-col">
          <div className="description">
            <h1>Agricultural Products For All</h1>
            <p>Eat natural, save cost, stay healthy.</p>
            <button>See Products in Season</button>
          </div>

          <div className="lightbox">
            <div className="lightboxdescription">
              <h6>Products in Season</h6>
              <p>
                Utilise this opportunity to purchae some of this products at a
                cheaper rate for consumption or storage
                <span>See more</span>
              </p>
            </div>

            <img
              className="lightboximage"
              src="/images/tomatos.jpg"
              alt="Tomatoes"
            />
          </div>
        </div>
        <div className="right-col">
          <img
            className="homeimage"
            src="/images/home image.jpg"
            alt="Home Image"
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default Hero;
