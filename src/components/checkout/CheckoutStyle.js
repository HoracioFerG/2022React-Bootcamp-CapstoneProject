import styled from "styled-components";

const CheckoutContainer = styled.div`
  background-color: rgba(240, 235, 227, 0.5);
  margin: 20px;
  width: auto;
  padding: 20px;
  min-height: 80vh;
  max-height: 100vh;
  height: 80vh;
  border-radius: 10px;
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .formContainer {
    background-color: white;
    border-radius: 10px;
    display: grid;
    grid-template-rows: auto;
    height: 100%;

    form {
      display: flex;
      flex-direction: column;

      input {
        border-radius: 5px;
        border: 1px solid #7d9d9c;
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 8px;
        max-height: 50px;
        min-height: 30px;
        padding: 5px;

        :focus {
          color: #576f72;
          outline: none;
          box-shadow: 0px 0px 15px -3px rgb(125, 157, 156);
        }
      }
      label {
        padding: 5px;
        max-height: 30px;
      }
      textarea {
        border-radius: 5px;
        border: 1px solid #7d9d9c;
        margin-left: 8px;
        margin-right: 8px;
        max-height: 100px;
        :focus {
          color: #576f72;
          outline: none;
          box-shadow: 0px 0px 15px -3px rgb(125, 157, 156);
        }
      }

      p {
        margin: 0;
        padding: 5px;
        font-size: smaller;
      }
    }
  }
`;

export default CheckoutContainer;
