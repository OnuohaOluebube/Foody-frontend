import styled from "styled-components";
import { device } from "./Common/Screensizes";
import { useStateValue } from "./Common/StateProvider";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: var(--primary);
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  width: 100%;
  margin: 0;
  height: 11vh;
  z-index: 100;
  position: fixed;
  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }

  .container {
    display: flex;
    width: 100%;
    margin: 0 15px;
    flex-direction: row;

    align-items: center;
    color: var(--white2);
    line-height: 1.4rem;
  }

  .logo {
    font-weight: bold;
    font-size: 1.8rem;
  }
  .logo1 {
    color: var(--secondary);
    font-style: italic;
  }

  .logo2 {
    color: var(--white2);
  }

  .boldsmallgrouping {
    display: flex;
    flex-direction: column;

    width: 22%;
    margin: 0.7rem;
  }
  .boldtext {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0 5px;
  }

  .smalltext {
    font-size: 0.9rem;
  }

  .signin {
    width: 100%;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .searchbox {
    height: 7vh;
    display: flex;
    width: 100%;

    padding: 0;
  }

  .searchbutton {
    display: flex;
    align-items: center;
    background: var(--secondary);
    border-radius: 0 3px 3px 0;

    font-size: 1.5rem;
    color: var(--black);
    padding: 0 10px;
  }

  select {
    color: #757373;
    border-radius: 3px 0 0 3px;
    width: 10%;
    font-size: 1rem;
    padding-left: 0.3rem;
  }

  input {
    width: 100%;
    padding: 0.8rem 0.5rem;
    font-size: 1rem;
  }

  .shoppingbasket {
    display: flex;
    align-items: center;
    border-radius: 0 5px 5px 0;
  }

  .usericon {
    padding: 7px;
  }
`;

const MobileWrapper = styled.div`
  background: var(--primary);

  flex-direction: column;
  align-items: center;
  color: var(--white2);
  justify-content: space-evenly;
  padding: 0.6rem 1.5rem;
  padding-bottom: 0;
  width: 100%;
  display: none;
  height: fit-content;
  @media ${device.mobile} {
    display: flex;
  }
  @media ${device.tablet} {
    display: flex;
    height: 18vh;
  }

  .mobilecontainer {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-weight: bold;

    padding-right: 1.7rem;
  }

  @media ${device.tablet} {
    .logo {
      font-size: 2.8rem;
    }
  }

  @media ${device.mobile} {
    .logo {
      font-size: 1.8rem;
    }
  }
  .logo1 {
    color: var(--secondary);
    font-style: italic;
  }

  .logo2 {
    color: var(--white2);
  }

  .bars {
    padding-right: 0.1rem;
  }
  @media ${device.tablet} {
    .bars {
      font-size: 2.7rem;
    }
  }

  @media ${device.mobile} {
    .bars {
      font-size: 1.8rem;
    }
  }
  .boldsmallgrouping {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10%;
    margin: 0.7rem;
    justify-content: space-between;
    width: 100%;
  }

  .boldtext {
    font-weight: bold;
  }

  @media ${device.tablet} {
    .boldtext {
      font-size: 2rem;
    }
  }

  @media ${device.mobile} {
    .boldtext {
      font-size: 1.3rem;
    }
  }

  .signin {
    display: flex;
    align-items: center;
  }

  .usericon {
    font-size: 1.8rem;
    margin-left: 1rem;
  }

  @media ${device.tablet} {
    .usericon {
      display: flex;
    }
  }

  @media ${device.mobile} {
    .usericon {
      display: none;
    }
  }

  .shoppingbasket {
    display: flex;
    align-items: center;
  }

  @media ${device.tablet} {
    .shoppingbasket {
      font-size: 2rem;
    }
  }

  @media ${device.mobile} {
    .shoppingbasket {
      font-size: 1.5rem;
    }
  }

  .itemsinbasket {
    margin: 0 0.3rem;
  }

  .searchbox {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #7a7878;
    padding: 0;
    padding-bottom: 1rem;
  }

  .searchbutton {
    display: flex;
    align-items: center;
    background: var(--secondary);
    border-radius: 0 10px 10px 0;
    color: var(--black);
    padding: 0 0.8rem;
    font-size: 1.7rem;
  }

  select {
    color: #757373;

    width: 12%;
    font-size: 1.5rem;
    padding-left: 0.5rem;
    border-radius: 10px 0 0 10px;
  }
  @media ${device.tablet} {
    select {
      display: block;
    }
  }

  @media ${device.mobile} {
    select {
      display: none;
    }
  }
  input {
    width: 100%;
  }

  @media ${device.tablet} {
    input {
      font-size: 1.6rem;
      padding: 0.8rem 1.5rem;
    }
  }

  @media ${device.mobile} {
    input {
      border-radius: 10px 0 0 10px;
      padding: 0.6rem 0.6rem;
      font-size: 1.1rem;
    }
  }
`;

const NavBar = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Wrapper>
        <div className="container">
          <Link to="/">
            <div className="logo">
              <span className="logo1">
                F<span className="logo2">oo</span>dy
              </span>
            </div>
          </Link>
          <div className="boldsmallgrouping">
            <span className="smalltext">
              Delivery to <br />
            </span>
            <span className="boldtext">State</span>
          </div>
          <div className="searchbox">
            <select name="departments" id="departments">
              <option value="All">All</option>
              <option value="Cereals">Cereals</option>
              <option value="Legumes">Legumes</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
            </select>
            <input type="text" placeholder="Search Foody" />
            <p class="searchbutton">
              <i class="fa fa-search" aria-hidden="true"></i>
            </p>
          </div>
          <div className="boldsmallgrouping">
            <Link to="/SigninForm">
              <span className="smalltext">
                Hello
                <br />
              </span>
              <span className="boldtext">Sign in </span>
            </Link>
          </div>
          <Link to="/Checkout">
            <p className="shoppingbasket">
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              <span className="boldtext">{basket?.length}</span>
              <span className="boldtext">Cart</span>
            </p>
          </Link>
        </div>
      </Wrapper>

      <MobileWrapper>
        <div className="mobilecontainer">
          <div className="bars">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="logo">
            <span className="logo1">
              F<span className="logo2">oo</span>dy
            </span>
          </div>

          <div className="boldsmallgrouping">
            <p className="boldtext signin">
              Sign in
              <span className="usericon">
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <Link to="/Checkout">
            <p className="shoppingbasket">
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              <span className="boldtext itemsinbasket">0</span>
              <span className="boldtext">Cart</span>
            </p>
          </Link>
        </div>

        <div className="searchbox">
          <select name="departments" id="departments">
            <option value="All">All</option>
            <option value="Cereals">Cereals</option>
            <option value="Legumes">Legumes</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
          <input type="text" placeholder="Search Foody" />
          <p className="searchbutton">
            <i class="fa fa-search" aria-hidden="true"></i>
          </p>
        </div>
      </MobileWrapper>
    </>
  );
};

export default NavBar;
