// AgendaDayToggle.tsx

import React, { useState } from "react";
import "./AgendaDaysToggle.css";

const AgendaDayToggle = () => {
  const [selectedDay, setSelectedDay] = useState("dayOne");

  const handleToggle = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className="days-toggle-container">
      <button
        className={`days-toggle-button ${selectedDay === "dayOne" ? "days-toggle-selectedButton" : ""}`}
        onClick={() => handleToggle("dayOne")}
        disabled={selectedDay === "dayOne"}
      >
        DAY 1
      </button>
      <button
        className={`days-toggle-button ${selectedDay === "dayTwo" ? "days-toggle-selectedButton" : ""}`}
        onClick={() => handleToggle("dayTwo")}
        disabled={selectedDay === "dayTwo"}
      >
        DAY 2
      </button>
    </div>
  );
};

export default AgendaDayToggle;
