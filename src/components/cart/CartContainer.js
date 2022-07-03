import styled from "styled-components";

const CartContainer = styled.div`
  background-color: rgba(240, 235, 227, 0.5);
  margin: 20px;
  width: auto;
  padding: 20px;
  min-height: 80vh;
  max-height: 100vh;
  height: 80vh;
  border-radius: 10px;
  h1 {
    color: #576f72;
  }
  hr {
    color: #7d9d9c;
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-height: inherit;
    height: inherit;

    .itemsContainer {
      overflow-y: scroll;
      max-height: inherit;
      height: 70vh;
    }

    .checkoutContainer {
      max-height: 40vh;
      background-color: white;

      grid-template-rows: auto;
      border-radius: 10px;
      margin: 5px;

      .title {
        display: flex;
        border-radius: 5px;
        background-color: rgb(87, 111, 114);
        align-items: center;
        flex-direction: column;
        h1 {
          color: white;
        }
      }

      .bottom {
        display: grid;
        grid-template-columns: 40% 60%;
        padding: 10px;

        h3 {
          color: #576f72;
        }

        button {
          cursor: pointer;
          width: 100%;
          border-radius: 5px;
          padding: 10px;
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
      .checkoutRow {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 5px;

        p {
          margin: 1px;
        }
      }
    }
  }
`;

export default CartContainer;
