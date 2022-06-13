import styled from 'styled-components';

const ProductsHomeContainer = styled.div`
    margin: 20px;
    display: flex;
    position: relative;
    flex-direction: row;
    max-height: 100vh;
    

    .categoriesMenu{
        
        width: 20%;   
        border-left: 0 0 transparent;
        border-right: 1px solid black;
        border-top: 0 0 transparent;
        border-bottom: 0 0 transparent;
        position: sticky;
        
        p{
            cursor: pointer;

            :hover{
                text-decoration: underline;
                color: gray;
            }

            
        }
          
    }

    .clicked{
                text-decoration: underline;
                color: gray;
            }
    
    .productsGrid{
        width: 80%;
        max-height: 100vh;
        display: flex;
        flex-wrap:  wrap;
        justify-content: center;
        position: relative;
        overflow-y: scroll;
    }
`;

export default ProductsHomeContainer;