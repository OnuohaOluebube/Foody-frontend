import React from "react";
import styled from "styled-components";
import { device } from "./Common/Screensizes";
import Title from "./Title";

function About(props) {
  const Aboutwrapper = styled.section`
    height: 100vh;
    padding: 4rem 2rem;
    margin-bottom: 2rem;
    @media ${device.mobile} {
      height: 550px;
    }

    .about {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;

      margin-bottom: 20px;
      height: 100vh;
      width: 100%;
      @media ${device.mobile} {
        flex-direction: column;
      }
    }
    .aboutImage {
      display: flex;
      padding-left: 30px;
      width: 60%;
      height: 60vh;
      position: relative;
      margin-bottom: 100px;
      @media ${device.mobile} {
        width: 90%;
      }
    }

    .aboutImage img {
      object-fit: cover;

      width: 90%;
      height: 100%;
      padding-left: 20px;
      z-index: 1;

      padding-left: 20px;
      @media ${device.mobile} {
        width: 90%;
      }
    }

    .aboutImage::before {
      content: "";
      width: 82%;
      height: 60vh;
      background-color: var(--primary);
      position: absolute;
      z-index: 0;
      top: -10%;
      left: 3%;

      @media ${device.mobile} {
        width: 250px;
      }
    }

    .aboutdescription {
      text-align: left;
      display: flex;
      flex-direction: column;
      height: 100vh;
      align-items: flex-start;
      padding-top: 60px;
      width: 40%;
      margin-right: 0.4rem;

      @media ${device.mobile} {
        width: 85%;
        margin-top: 50px;
      }
    }

    .aboutdescription h6 {
      font-size: 2rem;
      margin: 0;
    }
    .aboutdescription p {
      font-size: 1.2rem;
      padding-bottom: 2rem;
    }

    button {
      padding: 1rem 2rem;
      background: #b9713b;
      color: white;
      font-size: 1rem;
      box-shadow: 7px 7px var(--primary2);
      border: none;
    }
  `;

  return (
    <Aboutwrapper>
      <Title titlename="About Us" />
      <div className="about">
        <div className="aboutImage">
          <img src="/images/aboutus.jpg" alt="" />
        </div>
        <div className="aboutdescription">
          <h6>We are the best in your area</h6>
          <p>
            We are the best with a lot of witnesses to bear for us We are the
            best with a lot of witnesses to bear for us We are the best with a
            lot of witnesses to bear for us We are the best with a lot of
            witnesses to bear for us
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </Aboutwrapper>
  );
}

export default About;
