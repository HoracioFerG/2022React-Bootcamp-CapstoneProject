import styled from "styled-components";

const ProductItemContainer = styled.div`
  margin: 8px;
  position: relative;
  max-width: 203px;
  background-color: white;
  border-radius: 10px;
  /* border: 5px solid white; */
  /* border-color: #6f6f6f;
  border-width: 1px;
  border-style: solid;
  box-shadow: 2px 2px 5px 1px #999; */
  .text {
    overflow: hidden;
    margin: 5px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    color: rgba(87, 111, 114, 0.7);
    font-weight: bold;
  }
  :hover {
    background-color: white;
    border-color: "#B55400";
    box-shadow: 0px 0px 15px -3px rgb(125, 157, 156);
  }

  .imageContainer {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  .product-image {
    max-width: 200px;
    position: relative;
    display: block;
    /* border-radius: 10px; */
    margin: auto;
    border-radius: 10px;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: rgba(125, 157, 156, 0.5);
    border-width: 3px;
    border-style: solid;
  }
  .bagLogo {
    position: absolute;
    max-width: 25px;
    top: 1em;
    right: 0;
    :hover {
      background-color: rgb(125, 157, 156, 0.5);
    }
  }

  .productName {
    font-weight: bold;
    color: rgb(87, 111, 114);
    margin-bottom: 0;
    margin-top: 5px;
    margin-left: 5px;
  }

  .productCategory {
    color: rgba(87, 111, 114, 0.6);
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

  .priceDiscount {
    text-align: right;
    font-size: medium;
    color: rgb(125, 157, 156, 0.9);
  }

  .discount {
    font-weight: bold;
    text-align: right;
    color: rgba(87, 111, 114, 2);
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
    color: rgb(125, 157, 156);
  }
`;

export default ProductItemContainer;
