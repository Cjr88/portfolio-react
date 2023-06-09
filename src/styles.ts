import { createGlobalStyle, styled } from "styled-components";
import { Theme } from "./themes/dark";

const EstiloGlobal = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Mono', monospace;
        list-style: none;
    }
    body{
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: ${(props) => (props.theme as Theme).corDeBackground};

        @media (max-width: 768px){
            padding-top: 16px
        }
    }
    `;

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 56px;

    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
        img{
            width:100%
        }
    }
    `
export default EstiloGlobal