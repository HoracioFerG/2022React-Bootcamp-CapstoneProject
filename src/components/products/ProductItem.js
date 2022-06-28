import styled from "styled-components";

const ProductItemContainer = styled.div`
  margin: 8px;
  position: relative;
  max-width: 203px;
  background-color: rgb(220, 215, 201);
  border-radius: 10px;
  border: 5px solid white;
  /* border-color: #6f6f6f;
  border-width: 1px;
  border-style: solid;
  box-shadow: 2px 2px 5px 1px #999; */
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  :hover {
    background-color: white;
    cursor: pointer;
    border-color: white;

    .product-image {
      box-shadow: 0px 0px 15px -3px rgba(95, 113, 97, 1);
    }
  }

  .imageContainer {
    position: relative;
    display: inline-block;
  }
  .product-image {
    max-width: 200px;
    position: relative;
    display: block;
    /* border-radius: 10px; */
    margin: auto;
    border-radius: 10px;
    border-top: white;
    border-left: white;
    border-right: white;
    border-bottom: #6d8b74;
    border-width: 3px;
    border-style: solid;
  }
  .bagLogo {
    position: absolute;
    max-width: 25px;
    top: 1em;
    right: 0;
    :hover {
      background-color: rgba(224, 223, 223, 0.8);
    }
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
    color: rgb(95, 113, 97);
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
