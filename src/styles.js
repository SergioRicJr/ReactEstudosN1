import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #AAFFAA;
        border: 0;
    }
`

//conteudo da calculadora
export const Content = styled.div`
    background-color: #FFAAFF;
    width: 80%;
    min-height: 350px;
`