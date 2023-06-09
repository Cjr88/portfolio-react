import Title from "../../components/Title";
import { P } from "../../components/Paragrafo/styles";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <P tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Then the people
      around the world started to cry
    </P>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=Cjr88&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Cjr88&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
);

export default Sobre;
