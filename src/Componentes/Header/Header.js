import React from "react";
import { HeaderStyle } from "./styled";

export function Header() {
  return (
    <HeaderStyle>
      <h1>LabeTube</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </HeaderStyle>
  );
}
