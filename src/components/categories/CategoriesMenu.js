import styled from "styled-components";

const CategoriesMenuContainer = styled.div`
  width: 20%;
  border-left: 0 0 transparent;
  border-right: 1px solid rgb(125, 157, 156);
  border-top: 0 0 transparent;
  border-bottom: 0 0 transparent;
  position: sticky;
  padding: 5px;

  hr {
    color: rgb(125, 157, 156);
    height: 1px;
  }

  h4 {
    color: rgb(87, 111, 114);
  }

  p {
    cursor: pointer;
    color: rgb(125, 157, 156);
    :hover {
      text-decoration: underline;
      color: gray;
    }
  }
`;

export default CategoriesMenuContainer;
