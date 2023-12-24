import React, { ReactNode } from "react";
import "./AppModal.css"

interface AppModalProps {
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
}

const AppModal: React.FC<AppModalProps> = ({ onClose, children, showCloseButton = true }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
