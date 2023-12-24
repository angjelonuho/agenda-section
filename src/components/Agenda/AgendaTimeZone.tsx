import { useEffect, useState } from "react";
import "./AgendaTimeZone.css";

interface AgendaTimeZoneProps {
  inline?: boolean;
}

const AgendaTimeZone: React.FC<AgendaTimeZoneProps> = ({ inline = false }) => {
  const [continent, setContinent] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [continentPart, cityPart] = userTimezone.split("/");
    setContinent(continentPart);
    setCity(cityPart);
  }, []);

  return (
    <div className={`agenda-time-zone-container ${inline ? 'inline' : ''}`}>
      {inline ? (
        <p className="agenda-time-zone">{`Timezone: ${continent}/${city}`}</p>
      ) : (
        <>
          <p className="agenda-time-zone">{`Timezone: ${continent}/`}</p>
          <p className="agenda-time-zone">{city}</p>
        </>
      )}
    </div>
  );
};

export default AgendaTimeZone;
