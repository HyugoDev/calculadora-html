import styled from "styled-components";




export const Display = styled.div`

    height: 60px;
    background-color: #fff;
    border-radius : 5px;
    display: flex;

    justify-content: end;
    align-items: center;

    margin-top: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;

    div{
        margin-right: 10px;
    }
`;

export const Button = styled.button`
    border-radius: 60px;
    background: linear-gradient(45deg, #95d4fd, #7db2d4);


    border: none;
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    
    
    width: 80px;
    height: 80px;



    &:hover {
        background-color: #9599E2;
        background-image: linear-gradient(180deg, #9599E2 0%, #8BC6EC 100%);
    }


`;


export const Container = styled.div`

    display: flex;
    flex-direction: column;
;
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-right: 6rem;
    margin-top: 1rem;
`;