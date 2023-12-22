import React, { ReactNode } from "react";
import "./AppModal.css"

interface AppModalProps {
  onClose: () => void;
  children: ReactNode;
}

const AppModal = ({ onClose, children }: AppModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default AppModal;
