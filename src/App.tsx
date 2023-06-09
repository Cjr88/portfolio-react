import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import EstiloGlobal, { Container } from "./styles";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";
import temaLight from "./themes/light";
import temaDark from "./themes/dark";

function App() {
  const [temaDarkOn, setTemaDarkOn] = useState(false)

  function trocaTema() {
    setTemaDarkOn(!temaDarkOn)
  }

  return (
    <ThemeProvider theme={temaDarkOn ? temaDark : temaLight}>
      <Container>
        <EstiloGlobal />
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
