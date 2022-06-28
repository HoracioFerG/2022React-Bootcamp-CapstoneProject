import styled from "styled-components";

const ProductDetailContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 15px -3px rgb(125, 157, 156);
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin: 20px;
  min-height: 100vh;
  height: auto;
  width: auto;

  .specsContainer {
    .spec {
      color: rgba(87, 111, 114, 0.8);
    }
    .specName {
      color: rgb(87, 111, 114);
    }
  }

  .addToCartBtn {
    display: flex;
    align-items: center;
    flex-direction: column;
    button {
      cursor: pointer;
      width: 150px;
      border-radius: 5px;
      padding: 20px;
      align-items: center;
      font-size: large;
      border: 1px, solid, black;
      background-color: rgb(125, 157, 156);
      color: white;

      :hover {
        background-color: rgb(87, 111, 114);
      }
    }
  }
  .tagsContainer {
    display: flex;
    flex-flow: column;
    align-items: baseline;
    p {
      margin: 0;
      color: rgb(125, 157, 156);
    }
  }
  .productDescription {
    text-align: justify;
    color: rgba(87, 111, 114, 0.7);
  }
  .priceContainer {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 0;

    .oldPrice {
      text-decoration: line-through;
      color: gray;
      margin-bottom: 0;
    }
    h2 {
      color: rgb(125, 157, 156, 0.9);
    }

    .savePrice {
      color: rgba(87, 111, 114, 2);
      margin: 0;
    }
  }

  .sliderContainer {
    width: 40%;
    padding: 15px;
  }

  .productInformation {
    padding: 15px;
    width: 60%;

    label {
      color: rgb(87, 111, 114);
    }

    h4 {
      color: rgb(87, 111, 114);
    }
    h1 {
      color: rgb(87, 111, 114);
    }
    .btn-group button {
      background-color: rgb(125, 157, 156);
      border: 1px black;
      color: white;
      padding: 10px 15px;
      cursor: pointer;
      float: left;
      margin-top: 10px;
    }

    .btn-group button:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */
    .btn-group button:hover {
      background-color: rgb(87, 111, 114);
    }
    h3 {
      text-align: center;
    }
    hr {
      width: 100%;
      left: 0;
      color: rgb(125, 157, 156);
    }
  }
`;

export default ProductDetailContainer;
