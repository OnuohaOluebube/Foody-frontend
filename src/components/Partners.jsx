import React, { useContext } from "react";
import styled from "styled-components";
import TitleBanner from "./Titlebanner";
import ProductsContext from "./Common/ProductsProvider";

const Wrapper = styled.div`
  margin: 5rem 2.5rem;
  width: 100%;
  .ourPartnerswrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .ourPartner {
    width: 17.5%;
    height: 160px;
    margin: 0.5rem;

    /* margin-top: 0; */

    /* :hover {
      box-shadow: 14px 14px 20px var(--primary2), -14px -14px 20px var(--white1);
    } */
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: 1px solid var(--primary2);
    object-fit: cover;
  }
`;
const Partners = () => {
  const ourPartnersContext = useContext(ProductsContext);

  return (
    <Wrapper>
      <TitleBanner partners title="Our Exclusive Partners" />
      <div className="ourPartnerswrapper">
        {ourPartnersContext.ourPartners
          ? ourPartnersContext.ourPartners.map((ourPartner) => (
              <div className="ourPartner">
                <img src={ourPartner.image} alt="Our Partners" />
              </div>
            ))
          : []}
      </div>
    </Wrapper>
  );
};

export default Partners;
