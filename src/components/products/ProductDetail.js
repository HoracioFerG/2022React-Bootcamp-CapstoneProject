import styled from "styled-components";

const ProductDetailContainer = styled.div`
  border-radius: 10px;
  background-color: aliceblue;
  display: flex;
  flex-wrap: nowrap;
  margin: 20px;
  height: 100vh;
  width: auto;

  .sliderContainer {
    width: 40%;
    padding: 15px;
  }

  .productInformation {
    background-color: red;
    padding: 15px;
    width: 60%;

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
