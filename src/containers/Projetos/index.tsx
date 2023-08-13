import { useEffect, useState } from "react";
import Projeto from "../../components/Projeto";
import Title from "../../components/Title";
import { Lista } from "./styles";

const Projetos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Cjr88/repos", {
      headers: {
        Authorization: "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",
      },
    })
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Erro ao buscar repositórios:", error));

  }, []);


  return (
    <>
    <section>
      <Title fontSize={16}>Projects</Title>
      <Lista>
        {repos.map((repo) => (
          <li key={repo}>
            <Projeto repo={repo} />
          </li>
        ))}
      </Lista>
    </section>
    </>

  );
};


export default Projetos;
