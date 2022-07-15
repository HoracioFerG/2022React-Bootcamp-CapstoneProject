import styled from "styled-components";

const FeaturedProductGrid = styled.div`
  background-color: rgba(240, 235, 227, 0.5);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  position: relative;

  button {
    flex: 0 0 80%;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    margin-bottom: 10px;
    border-color: transparent;
  }
  button h4 {
    color: rgb(87, 111, 114);
  }
  .featuredProductsTitleContainer {
    flex: 0 0 100%;

    h3 {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande";
      text-align: center;
      color: rgb(87, 111, 114);
    }

    hr {
      width: 80%;
      color: rgba(125, 157, 156, 0.5);
    }
  }
`;

export default FeaturedProductGrid;
