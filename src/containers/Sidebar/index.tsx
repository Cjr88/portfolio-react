import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
    trocaTema: () => void
}
const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Title fontSize={20}>Carlos Jr</Title>
            <Paragrafo tipo="principal" fontSize={16}>
                Cjr88
            </Paragrafo>
            <Descricao tipo="secundario" fontSize={14}>
                Web developer
            </Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
        
    </aside>
)

export default Sidebar