import styled from "styled-components";

const CategoriesMenuContainer = styled.div`
  width: 20%;
  border-left: 0 0 transparent;
  border-right: 1px solid black;
  border-top: 0 0 transparent;
  border-bottom: 0 0 transparent;
  position: sticky;
  padding: 5px;

  p {
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: gray;
    }
  }
`;

export default CategoriesMenuContainer;
