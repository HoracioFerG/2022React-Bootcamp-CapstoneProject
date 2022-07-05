import styled from "styled-components";

const ProductsHomeContainer = styled.div`
  margin: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  max-height: 90vh;
  background-color: rgba(240, 235, 227, 0.5);

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
      color: #576f72;
      padding-left: 10px;
      font-weight: bold;
    }

    select {
      min-width: 4px;
      max-height: 50px;
      background-color: transparent;
      border: 0;
      option {
        background-color: rgba(240, 235, 227, 0.5);
      }
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
      color: #7d9d9c;

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
