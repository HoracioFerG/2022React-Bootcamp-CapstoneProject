import styled from "styled-components";

const NavBar = styled.nav`
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 5px rgb(125, 157, 156);
  display: flex;
  /* flex-flow: row wrap; */
  margin: 20px;
  max-height: 125px;
  padding: 15px;
  border-radius: 5px;
  .brand-text {
    color: rgb(87, 111, 114);
  }
  .leftSideHeader {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 50%;

    .logo {
      cursor: pointer;
    }
  }

  .rightSideHeader {
    display: flex;
    right: 0;
    margin-left: auto;
    width: 50%;
    align-items: center;

    input {
      width: 100%;
      height: 25px;
      padding: 8px;
      border: 1px solid #0a7c82;
      border-radius: 20px 0px 0px 20px;
      outline: none;

      border-right: 0;
      :focus {
        outline: none;
      }
    }
    .searchButton {
      height: 43px;
      cursor: pointer;
      text-align: center;
      border: 1px solid #0a7c82;
      border-radius: 0px 20px 20px 0px;
      background-color: rgb(125, 157, 156);
      color: white;
      :hover {
        background-color: rgb(87, 111, 114);
      }
    }

    img {
      max-width: 50px;
    }
  }
`;

export default NavBar;
