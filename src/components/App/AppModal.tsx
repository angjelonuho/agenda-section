import React, { ReactNode, useEffect, useState } from "react";
import "./AppModal.css";

interface AppModalProps {
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
}

const AppModal: React.FC<AppModalProps> = ({
  onClose,
  children,
  showCloseButton = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 50);

    return () => clearTimeout(openTimer);
  }, []);

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div
        className={`modal-content ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default AppModal;
