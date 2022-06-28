import styled from "styled-components";

const ProductDetailContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 15px -3px rgba(95, 113, 97, 1);
  display: flex;
  flex-wrap: nowrap;
  margin: 20px;
  height: 100vh;
  width: auto;
  .addToCartBtn {
    display: flex;
    align-items: center;
    flex-direction: column;
    button {
      cursor: pointer;
      width: 20%;
      border-radius: 5px;
      padding: 20px;
      align-items: center;
      font-size: large;
      border: 1px, solid, black;
      background-color: transparent;
    }
  }
  .tagsContainer {
    display: flex;
    flex-flow: column;
    align-items: baseline;
    p {
      margin: 0;
    }
  }
  .productDescription {
    text-align: justify;
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

    .savePrice {
      color: gray;
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

    .btn-group button {
      background-color: #04aa6d; //change color
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
      background-color: #3e8e41;
    }
    h3 {
      text-align: center;
    }
    hr {
      width: 100%;
      left: 0;
    }
  }
`;

export default ProductDetailContainer;
