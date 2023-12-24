import React from "react";
import "./AgendaImageCarousel.css";

interface AgendaImageCarouselProps {
  data: Api.EventAgenda.ISpeakerList[];
}

const AgendaImageCarousel: React.FC<AgendaImageCarouselProps> = ({ data }) => {

  //TODO: display a default image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; 
    target.src = ""; 
  };

  const mapData = () => {
    return data.map((item, index) => (
      <div className="agenda-carousel-item" key={index}>
        <img
          src={item.image.url}
          srcSet={item.image.srcset}
          alt={item.image.alt}
          className="agenda-carousel-img"
          onError={handleImageError}
        />
        <div className="agenda-carousel-caption">
          <img
            src={item.company_logo[0]?.mediaUrl ?? null}
            alt={`Company Logo for ${item.name}`}
            className="agenda-company-logo"
            onError={handleImageError}
          />
        </div>
      </div>
    ));
  };

  return <div className="agenda-image-carousel">{mapData()}</div>;
};

export default AgendaImageCarousel;
