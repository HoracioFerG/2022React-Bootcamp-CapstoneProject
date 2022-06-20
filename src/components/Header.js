import styled from "styled-components";

const NavBar = styled.nav`
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 5px #999;
  display: flex;
  /* flex-flow: row wrap; */
  margin: 20px;
  max-height: 125px;
  padding: 15px;
  border-radius: 5px;

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
    gap: 10px;
    align-items: center;

    input {
      width: 100%;
      max-height: 25px;
      padding: 8px;
      border-radius: 5px;
      border-width: 0.5px;
    }

    img {
      max-width: 50px;
    }
  }
`;

export default NavBar;
