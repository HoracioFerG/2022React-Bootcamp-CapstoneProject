import styled from "styled-components";

const ProductItemContainer = styled.div`
  margin: 8px;
  position: relative;
  max-width: 200px;
  background-color: rgba(224, 223, 223, 0.5);
  border-radius: 10px;

  border-color: #6f6f6f;
  border-width: 1px;
  border-style: solid;

  :hover {
    background-color: white;
    cursor: pointer;
    border-color: white;
    box-shadow: 2px 2px 5px 1px #999;
    img {
      border-bottom: black;
      border-width: 1px;
      border-style: solid;
    }
  }

  img {
    max-width: 200px;
    position: relative;
    display: flex;
    border-radius: 10px;
  }

  .productName {
    font-weight: bold;
    /* color: #8b7031; */
    margin-bottom: 0;
    margin-top: 5px;
    margin-left: 5px;
  }

  .productCategory {
    color: #6f6f6f;
    margin-left: 5px;
  }

  h6 {
    padding-right: 15px;
    margin: 0;
  }
  .price {
    text-decoration: line-through;
    color: #b1b1b1;
    font-weight: bold;
    text-align: right;
  }
  .priceContainer {
    background-color: red;
  }

  .priceDiscount {
    text-align: right;
    font-size: medium;
  }

  .discount {
    font-weight: bold;
    text-align: right;
    color: #52bf32;
    font-size: medium;
    padding-bottom: 20px;
  }

  .leftLine {
    width: 80%;
    left: 0;
    margin-left: 0;
    margin-top: 0;
  }

  .rightLine {
    width: 40%;
    left: 0;
    margin-left: 0;
    margin-top: 0;
  }
`;

export default ProductItemContainer;
