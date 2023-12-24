import AgendaDayToggle from "./AgendaDaysToggle";
import AgendaTimeZone from "./AgendaTimeZone";
import "./AgendaHeaderMenu.css";

interface AgendaHeaderMenuProps {
  header: string
  subheader: string
}

const AgendaHeaderMenu: React.FC<AgendaHeaderMenuProps> = ({ header, subheader }) => {
  return (
    <header role="navigation" className="agenda-header-menu">
      <div className="agenda-header-menu-container">
        <h5 className="agenda-header-menu-subheader">{subheader.toUpperCase()}</h5>
        <h1 className="agenda-header-menu-header">{header.toUpperCase()}</h1>
      </div>
      <div>
        <AgendaDayToggle />
      </div>
      <div className="navLastChild">
        <AgendaTimeZone />
      </div>
    </header>
  );
};

export default AgendaHeaderMenu;
