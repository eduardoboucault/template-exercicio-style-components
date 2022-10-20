import React from "react";
import { MainStyle } from "./styled";
import { Nav } from "../Nav/Nav";
import { Section } from "../Section/Section";

export function Main() {
  return (
    <MainStyle>
      <Nav />
      <Section />
    </MainStyle>
  );
}
