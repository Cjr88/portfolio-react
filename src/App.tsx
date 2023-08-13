import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import EstiloGlobal, { Container } from "./styles";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import temaLight from "./themes/light";
import temaDark from "./themes/dark";
import Projetos from "./containers/Projetos";

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
