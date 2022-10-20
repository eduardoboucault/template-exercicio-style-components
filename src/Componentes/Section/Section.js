import React from "react";
import { SectionStyle } from "./styled";
import CardVideo from "../CardVideo/CardVideo";

const card1 = {
  titulo: "Título do vídeo",
  imagemDoVideo: "https://picsum.photos/400/400?a=1",
  textoAlternativo: "descrição da imagem"
};

export function Section() {
  return (
    <SectionStyle>
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
      <CardVideo
        image1={card1.imagemDoVideo}
        titulo={card1.titulo}
        textoAlternativo={card1.textoAlternativo}
      />
    </SectionStyle>
  );
}
