import styled from "styled-components";

const SummaryContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  min-height: 60%;
  max-height: 100%;

  button {
    cursor: pointer;
    width: 45%;
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

  p {
    margin: 0 15px 0 15px;
    color: #576f72;
  }
  hr {
    width: 90%;
  }
  .header {
    background-color: #7d9d9c;
    border-radius: 5px;
    h3 {
      margin: 0;
      margin-bottom: 10px;
      padding: 15px;
      color: white;
      font-size: larger;
      text-align: left;
    }
  }
  .summary {
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 0px;
    margin: 5px 15px 5px 15px;
    .summaryRow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      h3 {
        margin: 5px 15px 5px 15px;
        color: #576f72;
      }
      p {
        text-align: center;
        align-self: center;
        color: gray;
      }
      b {
        color: #7d9d9c;
      }
    }
  }
  .productsSummaryC {
    background-color: white;
    display: grid;
    grid-template-rows: 1fr;
    margin: 10px;
    max-height: 50%;
    overflow-y: scroll;

    .summaryItem {
      margin: 1px;
      padding-top: 5px;
      text-align: center;
      cursor: default;
    }
    .summaryRule {
      color: white;
      width: 90%;
    }
  }
`;

export default SummaryContainer;
