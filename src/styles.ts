import { createGlobalStyle, styled } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-size: 28px;

        body{
            padding-top: 80px;
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

    img{
        max-width: 100%
    }
    `
export default EstiloGlobal