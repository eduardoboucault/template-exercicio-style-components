import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { DivStyle } from "./Componentes/div-tela-inteira/styled";
import { Header } from "./Componentes/Header/Header";
import { Main } from "./Componentes/Main/Main";
import { Footer } from "./Componentes/Footer/Footer";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <DivStyle>
        <Header />
        <Main />
        <Footer />
      </DivStyle>
    </>
  );
}
