import styled from "styled-components";

const CheckoutContainer = styled.div`
  background-color: rgba(240, 235, 227, 0.5);
  margin: 10px;
  width: auto;
  padding: 20px;
  max-height: 100vh;
  height: auto;
  border-radius: 10px;
  h1 {
    color: #576f72;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    height: auto;
  }
  .formContainer {
    background-color: white;
    border-radius: 10px;
    display: grid;
    grid-template-rows: auto;
    height: fit-content;
    padding-bottom: 20px;

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
        color: #576f72;
        font-weight: bold;
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
        color: #7d9d9c;
        font-weight: bold;
      }

      .btnActions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        button {
          cursor: pointer;
          text-align: center;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;

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
    }
  }
`;

export default CheckoutContainer;
