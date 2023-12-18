import React from "react";
import { AgendaNavMenuProps } from "../../types/agendaNavMenuProps";

const AgendaNavMenu = ({ header, subheader, timezone }: AgendaNavMenuProps) => {
  return (
    <header role="navigation">
      <h5>{subheader}</h5>
      <h1>{header}</h1>
      <p>{timezone}</p>
    </header>
  );
};

export default AgendaNavMenu;
