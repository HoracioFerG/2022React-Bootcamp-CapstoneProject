import styled from "styled-components";

const ProductDetailContainer = styled.div`
  border-radius: 10px;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px;
  height: 100vh;

  .sliderContainer {
    padding: 15px;
  }

  .productInformation {
    background-color: red;
    padding: 15px;

    h3 {
      text-align: center;
    }
    hr {
      width: 75%;
      left: 0;
    }
  }
`;

export default ProductDetailContainer;
