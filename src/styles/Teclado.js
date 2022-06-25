import styled from 'styled-components';


export const Button = styled.button`

    border-radius: 60px;
    background: linear-gradient(45deg, #95d4fd, #7db2d4);





    border: none;
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    
    margin: 1rem;
    width: 80px;
    height: 80px;

    &:hover {
        background-color: #9599E2;
        background-image: linear-gradient(180deg, #9599E2 0%, #8BC6EC 100%);
    }
    
`;

export const Container = styled.div`
 //container de las teclas 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    
    width: 100%;
    height: 100%;

    margin: 0;

`;