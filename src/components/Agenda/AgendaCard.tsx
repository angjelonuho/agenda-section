import React, { useState } from "react";
import AppModal from "../App/AppModal";
import "./AgendaCard.css";
import { formatIsoTimeTo12Hour } from "../../utils/timeUtils";
import AppButton from "../App/AppButton";
import AgendaImageCarousel from "./AgendaImageCarousel";
import AppInnerBlock from "../App/AppInnerBlock";
import AgendaTimeZone from "./AgendaTimeZone";

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

  console.log(
    JSON.stringify(card.attrs.speakerList[0].company_logo[0].mediaUrl)
  );

  const containerClass =
    card.attrs.speakerList.length > 2
      ? "large-card-container"
      : "small-card-container";

  return (
    <div className={`agenda-card-container ${containerClass}`}>
      <div className="agenda-card-wrapper">
        <div className="agenda-card" onClick={() => openModal(card)}>
          <div className="agenda-card-header">
            <div className="agenda-card-time">
              {formatIsoTimeTo12Hour(card.attrs.startTime, "en-US")}
            </div>
            <div className="agenda-card-keynote">{card.attrs.category}</div>
          </div>

          <h3 className="agenda-card-content-text">{card.attrs.title}</h3>

          <AppButton
            text="Learn more"
            icon="/icons/arrow-forward.svg"
            variant="btn-underline"
          />
    
          <AgendaImageCarousel data={card.attrs.speakerList} />
        </div>
      </div>

      {modalOpen && (
        <AppModal onClose={closeModal} showCloseButton={false}>
          {selectedSpeaker && (
            <section className="agenda-card-modal">
              <div className="agenda-card-header">
                <div className="agenda-card-time-timezone">
                  <div className="agenda-card-time-modal">
                    {formatIsoTimeTo12Hour(card.attrs.startTime, "en-US")} |{" "}
                    {card.attrs.duration} MIN
                  </div>
                  <div className="agenda-card-time-modal-timezone">
                  <AgendaTimeZone inline />
                  </div>
                </div>

                <AppButton
                  text={"close"}
                  icon="/icons/close.svg"
                  variant="btn-underline"
                  onClick={closeModal}
                />
              </div>

              <div className="agenda-card-body-modal">
                <div className="agenda-card-keynote">{card.attrs.category}</div>
                <h3 className="agenda-card-content-text">{card.attrs.title}</h3>
                <AppInnerBlock appInnerBlocks={card.innerBlocks} />
                <AppButton
                  text="Add to calendar"
                  icon="/icons/add.svg"
                  variant="btn-underline"
                />
              </div>

              <div className="agend-card-footer-modal">
                <h3 className="agenda-card-footer-modal-text">Speakers</h3>
                <AgendaImageCarousel data={card.attrs.speakerList} />
              </div>
            </section>
          )}
        </AppModal>
      )}
    </div>
  );
};

export default AgendaCard;
