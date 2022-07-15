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

  .notificationContainer {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;

    .productName {
      margin-bottom: 1px;
    }

    .messageContainer {
      background-color: white;
      width: 500px;
      height: 300px;
      position: absolute;
      top: 25%;
      left: 35%;
      align-content: center;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      .btnAlert {
        display: flex;
        flex-direction: row-reverse;
        button {
          border-radius: 5px;
          padding: 10px;
          width: 20%;
          align-items: baseline;
          cursor: pointer;
          align-items: center;
          border: 1px, solid, black;
          background-color: rgb(125, 157, 156);
          color: white;

          :hover {
            background-color: rgb(87, 111, 114);
          }
        }
      }
      h2 {
        text-align: center;
        color: rgb(87, 111, 114);
      }
      hr {
        color: rgb(125, 157, 156);
        width: 80%;
      }
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

      :disabled {
        background-color: gray;
        cursor: default;
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
      border-right: none;
    }

    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

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
