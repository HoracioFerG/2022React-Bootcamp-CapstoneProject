import styled from 'styled-components';

const ProductItemContainer = styled.div`
    margin: 8px;
    position: relative;
    max-width: 200px;
    background-color: aliceblue;
    border-radius: 10px;


    img{
        max-width: 200px;
        position: relative;
        display: flex;
        

    }

    .productName{
        font-weight: bold;
        color: red;
        margin-bottom: 0;
        margin-top: 0;
    }

    .productCategory{
        color:#6f6f6f;
    }

    h6{
        padding-right: 15px;
        margin: 0;
    }
    .price{
        text-decoration: line-through;
        color: #b1b1b1;
        font-weight: bold;
        text-align: right;
    }

    .priceDiscount{
        text-align: right;
        font-size: medium;
    }

    .discount{
        font-weight: bold;
        text-align: right;
        color: #52bf32;
        font-size: medium;
        padding-bottom: 20px;
    }

    .leftLine{
        width: 80%;
        left: 0;
        margin-left: 0;
        margin-top: 0;
    }

    .rightLine{
        width: 40%;
        left: 0;
        margin-left: 0;
        margin-top: 0;
    }
`;

export default ProductItemContainer;