import React from "react";
import { NavStyle, LiStyle } from "./styled";

export function Nav() {
  return (
    <NavStyle>
      <ul>
        <LiStyle>Início</LiStyle>
        <LiStyle>Em alta</LiStyle>
        <LiStyle>Inscrições</LiStyle>
        <hr />
        <LiStyle>Originais</LiStyle>
        <LiStyle>Histórico</LiStyle>
      </ul>
    </NavStyle>
  );
}
