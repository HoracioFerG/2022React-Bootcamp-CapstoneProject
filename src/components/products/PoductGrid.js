import styled from 'styled-components';

const FeaturedProductGrid = styled.div`
    background-color: rgba(232,232,232, 0.7);
    border-radius: 10px;
    display: flex;
    flex-wrap:  wrap;
    justify-content: center;
    margin: 20px;
    position: relative;

    .featuredProductsTitleContainer{
        flex: 0 0 100%;
        
        h3{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande';
            text-align: center;
        }

        hr{
            width: 80%;
        }
    }
`;

export default FeaturedProductGrid;