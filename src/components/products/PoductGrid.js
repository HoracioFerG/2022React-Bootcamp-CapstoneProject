import styled from "styled-components";

const FeaturedProductGrid = styled.div`
  background-color: white;
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
  .featuredProductsTitleContainer {
    flex: 0 0 100%;

    h3 {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande";
      text-align: center;
    }

    hr {
      width: 80%;
    }
  }
`;

export default FeaturedProductGrid;
