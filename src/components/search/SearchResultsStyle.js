import styled from "styled-components";

const SearchResultsContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 15px -3px rgba(95, 113, 97, 1);
  display: flex;
  margin: 20px;
  height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(240, 235, 227, 0.5);

  .productsGrid {
    margin: 10px;
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
    width: 100%;
    select {
      min-width: 4px;
      max-height: 50px;
      background-color: transparent;
      border: 0;
      option {
        background-color: rgba(240, 235, 227, 0.5);
      }
    }
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
`;

export default SearchResultsContainer;
