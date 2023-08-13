import Title from "../../components/Title";
import { P } from "../../components/Paragrafo/styles";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <span>Hey there!</span>
    <P tipo="principal">
    Hey there!
    As an adventurous soul, constantly on the hunt for new challenges, places and experiences.
    Living intesively and seeking for new experiencies is like a fuel for my spirit, offering a unique
    balance to my life.
    An open-minded individual, I&apos;m deeply passionate about technology, sports and gastronomy.
    This portfolio showcases some of the projects I&apos;m currently engaged in. My personal mantra is to grow by just 1% every day,
    aiming to evolve into a seasoned professional in the tech industry.
    Exploring new opportunities within this ever-changing landscape is my ultimate goal.
    Feel free to explore my projects and journey here. Let&apos;s connect and discover where our paths may intersect!
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
