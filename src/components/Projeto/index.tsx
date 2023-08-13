import Paragrafo from "../Paragrafo"
import Title from "../Title"
import { Card, LinkBotao } from "./styles"

export type ProjetoProps = {
  repo: {
    name: string;
    description: string;
  }
};

const Projeto = ({ repo }:ProjetoProps) => (
  <>
  <Card>
        <Title>{repo.name}</Title>
        <Paragrafo tipo="secundario">
            {repo.description}
        </Paragrafo>
        <LinkBotao href={`https://github.com/Cjr88/${repo.name}`} target="_blank" rel="noopener noreferrer" >Visualizar</LinkBotao>
    </Card>
  </>


)

export default Projeto
