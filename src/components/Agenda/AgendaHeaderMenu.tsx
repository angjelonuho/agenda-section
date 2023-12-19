import React from "react";
import { AgendaHeaderMenuProps } from "../../types/components/Agenda/agendHeaderMenuProps.type";

const AgendaNavMenu = ({ header, subheader, timezone }: AgendaHeaderMenuProps) => {
  return (
    <nav role="navigation">
      <h5>{subheader}</h5>
      <h1>{header}</h1>
      <p>{timezone}</p>
    </nav>
  );
};

export default AgendaNavMenu;
