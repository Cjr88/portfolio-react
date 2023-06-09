import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
    margin-top: 14px;
    margin-bottom: 10px;
`
export const BotaoTema = styled.button`
border-radius: 12px; 
padding: 8px;
color: ${(props) => props.theme.corDeTexto};
font-size: 12px;
font-weight: bold;
background-color:  ${(props) => props.theme.corDeTitle};
cursor: pointer;

@media (max-width: 768px){
    margin-bottom:20px;
}
`
export const  SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;

    @media (max-width: 768px){
        text-align: center
    }
`