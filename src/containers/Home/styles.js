import styled from "styled-components"


export const Container = styled.div`
    display: flex;//porpadrão o display flax coloca um item ao lado do outro
    flex-direction: column;//para alinhar em coluna e não um ao lado do outro
    align-items: center;//o justify-contant alinha os itens no eixo principal o align-items alinha no eixo segundario
    //gap: 5px;

    background: #0A0A10;
    height: 100%; 
    min-height: 100vh; 
`;
export const Image = styled.img`
    margin-top: 25px;
    width: 280px;
    height: 250px;
`;
export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 76px 36px;
    min-height: calc(100vh - 170px); 
    
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 20px;
`;
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    padding-left: 25px;
    line-height: 21px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
`;
export const Input = styled.input`
    width: 342px;
    height: 50px;
    padding-left: 25px;
    margin-bottom: 40px;
    
    background: rgba(255, 255, 255, 0.25);
    outline: none; 
    border: none;
    border-radius: 14px;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
     
`;
export const Button = styled.button`
    width: 342px;
    height: 50px;

    border: none;
    outline: none;
    border-radius: 14px; 
    background: #D93856;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
    
`;
