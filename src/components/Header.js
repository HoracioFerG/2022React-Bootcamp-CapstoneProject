import styled from 'styled-components';

const NavBar = styled.nav`
    align-items: center;
    background-color: white;
    box-shadow: 2px 2px 5px #999;
    display: flex;
    flex-flow: row wrap;
    margin: 20px;
    max-height: 125px;
    padding: 15px;
    border-radius: 5px;

    .cart-logo{
        size: 50px;
    }
    .logo{
        padding: 5px;
        cursor: pointer;
    }

    .brand-text{
        font-family: 'century gothic';
        padding-left: 3px;
        padding-right: 5px;
        font-weight: bold;
        color: black;
        align-content: center;
        text-decoration: none;
    }

    input{
       width: 20%;
       height: 30px;       
    }
    
`;

export default NavBar;