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

    .btn-logo {
        color: white;
        background-color: blue;
        
    }

    .brand-text{
        color: white;
    }

    .logo{
        background-image: url('../assets/logo-50.png');
    }
`;

export default NavBar;