import styled from "styled-components";

const QuantityButtonsContainer = styled.div`
  .btn-group button {
    background-color: rgb(125, 157, 156);
    border: 1px black;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
    float: left;
    margin-top: 10px;
  }

  .btn-group button:not(:last-child) {
    border-right: none;
  }

  .btn-group:after {
    content: "";
    clear: both;
    display: table;
  }

  .btn-group button:hover {
    background-color: rgb(87, 111, 114);
  }
`;

export default QuantityButtonsContainer;
