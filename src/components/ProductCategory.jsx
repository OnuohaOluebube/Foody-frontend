import React, { useContext } from "react";
import styled from "styled-components";
import ProductsContext from "./Common/ProductsProvider";
import Title from "./Title";

const Wrapper = styled.div`
  padding: 0 2.5rem;
  margin-top: 4.5em;
  .categorywrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
    height: fit-content;
    width: 100%;
  }

  .category {
    border-radius: 2rem;
    width: 13%;
    height: 80px;
    border: 1px solid var(--secondary);
    margin: 0.3rem;
    font-size: 1.5rem;
    padding: 1rem;
    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;

    /* padding: 1rem;
      font-size: 1.5rem;

      border: 1px solid var(--primary1);
      

      background: white;
      margin: 0.5rem 0.7em;
      width: 25%;
      background: var(--white2);
      box-shadow: 14px 14px 20px var(--primary2), -14px -14px 20px var(--white2);
      height: 220px;
      cursor: pointer; */

    :hover {
      box-shadow: 14px 14px 10px var(--primary2), -14px -14px 20px var(--white1);
    }
  }
  /* img {
      width: 100%;
      height: 70%;
      object-fit: cover;
    } */
  p {
    /* box-shadow: inset 8px 8px 8px #cbced1, inset -6px -6px 6px white; */

    color: var(--primary);
  }

  .active {
    background-color: #b9713b;
    border: 1px solid var(--primary);
  }
`;

function ProductCategory() {
  const categoriesContext = useContext(ProductsContext);

  return (
    <Wrapper>
      <Title titlename=" Our Collections" />
      <div className="categorywrapper">
        {categoriesContext.categories
          ? categoriesContext.categories.map((category) => (
              <button
                onClick={() => categoriesContext.onCategorySelect(category.id)}
                key={category.id}
                className={
                  categoriesContext.selectedcategory === category.id
                    ? "category active"
                    : "category"
                }
              >
                <p className="categoryname">{category.name}</p>
              </button>
            ))
          : ""}
      </div>
    </Wrapper>
  );
}

export default ProductCategory;
