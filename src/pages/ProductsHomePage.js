import styled from "styled-components";

const ProductsHomeContainer = styled.div`
  margin: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  max-height: 90vh;
  background-color: rgba(225, 191, 146, 0.2);

  .categoriesMenu {
    width: 20%;
    border-left: 0 0 transparent;
    border-right: 1px solid black;
    border-top: 0 0 transparent;
    border-bottom: 0 0 transparent;
    position: sticky;
    padding: 5px;

    p {
      cursor: pointer;

      :hover {
        text-decoration: underline;
        color: gray;
      }
    }
  }

  .clicked {
    text-decoration: underline;
    color: gray;
  }

  .productsGrid {
    width: 100%;
    max-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    overflow-y: scroll;
  }
  .paginationContainer {
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .nextButton {
      cursor: pointer;
      color: black;
      padding-left: 10px;
      font-weight: bold;
    }
    button {
      margin: 5px;
      border-radius: 6px;
      border-width: 1px;
      border-color: black;
      border-style: solid;
      background-color: white;
      font-size: 15px;
      cursor: pointer;

      :hover {
        background-color: rgba(226, 226, 226, 0.5);
      }
    }
  }
  .productsContainer {
    flex-direction: row;
    width: 80%;
  }
`;

export default ProductsHomeContainer;
