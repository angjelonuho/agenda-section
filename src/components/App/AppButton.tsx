import React from 'react';
import './AppButton.css';

interface ButtonProps {
  variant?: 'btn-underline';
  text: string;
  icon?: string;
  onClick?: () => void;
}

const AppButton: React.FC<ButtonProps> = ({ variant = 'btn-underline', text, icon, onClick }) => {
  const iconPath = icon ? `${process.env.PUBLIC_URL}${icon}` : undefined;

  return (
    <button className={`app-btn ${variant}`} onClick={onClick}>
      <span className="app-btn-text">{text}</span>
      {iconPath && <img src={iconPath} alt={`${text} Icon`} className="app-btn-icon" />}
    </button>
  );
};

export default AppButton;
