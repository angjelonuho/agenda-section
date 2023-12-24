import React from "react";
import "./AgendaDaysToggle.css";

interface AgendaDayToggleProps {
  selectedDay: string;
  onDayToggle: (day: string) => void;
}

const AgendaDaysToggle: React.FC<AgendaDayToggleProps> = ({ selectedDay, onDayToggle }) => {
  return (
    <div className="days-toggle-container">
      <button
        className={`days-toggle-button ${selectedDay === "Day 1" ? "days-toggle-selectedButton" : ""}`}
        onClick={() => onDayToggle("Day 1")}
        disabled={selectedDay === "Day 1"}
      >
        DAY 1
      </button>
      <button
        className={`days-toggle-button ${selectedDay === "Day 2" ? "days-toggle-selectedButton" : ""}`}
        onClick={() => onDayToggle("Day 2")}
        disabled={selectedDay === "Day 2"}
      >
        DAY 2
      </button>
    </div>
  );
};

export default AgendaDaysToggle;
