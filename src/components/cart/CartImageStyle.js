import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled(Link)`
  text-decoration: none;

  .quantityOnCart {
    text-decoration: none;
    background-color: red;
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    font-size: 12px;
    background: rgb(87, 111, 114);
    color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
    vertical-align: top;
    margin-left: -10px;
    position: relative;
    left: 75%;
    bottom: 55px;
  }
`;

export default LinkContainer;
