import React, { useState } from "react";
import AppModal from "../App/AppModal";
import "./AgendaCard.css";

interface AgendaCardProps {
  card: Api.EventAgenda.IInnerBlock;
}

const AgendaCard: React.FC<AgendaCardProps> = ({ card }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] =
    useState<Api.EventAgenda.IInnerBlock | null>(null);

  const openModal = (cardInfo: Api.EventAgenda.IInnerBlock) => {
    setSelectedSpeaker(cardInfo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
    setModalOpen(false);
  };

  const containerClass = card.attrs.speakerList.length > 2 ? "large-card-container" : "small-card-container";

  return (
    <div className={`agenda-card-container ${containerClass}`}>
      <div className="agenda-card-wrapper">
        <div className="agenda-card" onClick={() => openModal(card)}></div>
      </div>

      {modalOpen && (
        <AppModal onClose={closeModal}>
          {selectedSpeaker && (
            <div>
              <p>Time: {selectedSpeaker.attrs?.startTime}</p>
              <p>Category: {selectedSpeaker.attrs?.category}</p>
              <p>Heading: {selectedSpeaker.attrs?.title}</p>
              {/* Add more details about the speaker or event here */}
            </div>
          )}
        </AppModal>
      )}
    </div>
  );
};

export default AgendaCard;
