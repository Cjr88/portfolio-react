import styled from 'styled-components'


export const Card = styled.div`
    border: 2px solid ${(props) => props.theme.corPrincipal};
    padding: 16px;
`
export const LinkBotao = styled.a`
    color: ${(props) => props.theme.corDeTexto};
    font-size: 14px;
    background-color: ${(props) => props.theme.corPrincipal};
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    border-radius: 3px;
    margin-top: 24px;
    cursor: pointer;

`