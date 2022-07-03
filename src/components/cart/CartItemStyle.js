import styled from "styled-components";

const CartItemContainer = styled.div`
  margin: 10px 10px 10px 0;
  padding: 10px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-radius: 5px;
  :hover {
    //background-color: rgba(240, 235, 227, 0.1);
    border-color: "#B55400";
    box-shadow: 0px 0px 15px -3px rgb(125, 157, 156);
  }
  .imageContainer {
    border-bottom: 0;
    border-top: 0;
    border-left: 0;
    border-right: 1px;
    border-style: solid;
    border-color: #7d9d9c;
  }

  .descriptionContainer {
    padding: 10px;
    p {
      margin: 1px;
      color: gray;
      font-size: small;
    }
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;

      img {
        align-self: flex-end;
        height: 20px;
        position: relative;
        left: 90%;
        :hover {
          cursor: pointer;
        }
      }
    }

    h3 {
      margin: 2px;
      color: rgb(87, 111, 114);
    }

    h4 {
      margin: 5px;
      color: rgb(125, 157, 156);
    }

    small {
      color: rgba(87, 111, 114, 0.8);
    }
  }
`;

export default CartItemContainer;
