import React, { useState, useEffect } from "react";
import AppSpinner from "../components/App/AppSpinner";
import useFetch from "../hooks/useFetchAgendaItems";
import AgendaHeaderMenu from "../components/Agenda/AgendaHeaderMenu";
import AgendaCard from "../components/Agenda/AgendaCard";
import "./AgendaSection.css";
import debounce from "../utils/debounceUtil";
import AppButton from "../components/App/AppButton";

const AgendaSection: React.FC = () => {
  const { data, isLoading, error } = useFetch();
  const [visibleItems, setVisibleItems] = useState<number>(
    calculateVisibleItems(data)
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      setVisibleItems(calculateVisibleItems(data));
    }, 250);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  const handleLoadAllDebounced = debounce(() => {
    setVisibleItems(data?.data?.blocks[0]?.innerBlocks?.length || 20);
  }, 250);

  function calculateVisibleItems(
    data: Api.EventAgenda.IFetchResults | undefined
  ) {
    return window.innerWidth < 1280
      ? 5
      : data?.data?.blocks[0]?.innerBlocks?.length || 20;
  }

  if (isLoading) {
    return (
      <div>
        <AppSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {(error as any)?.message ??
          "unknown error loading agenda navigation menu"}
      </div>
    );
  }

  const header = data?.data?.blocks[0]?.attrs?.heading || "";
  const subheader = data?.data?.blocks[0]?.attrs?.intro || "";
  const innerBlocks: Api.EventAgenda.IInnerBlock[] =
    data?.data?.blocks[0]?.innerBlocks || [];

  return (
    <main className="agenda-section-container">
      <AgendaHeaderMenu header={header} subheader={subheader} />
      <section className="agenda-card-grid">
        {innerBlocks.slice(0, visibleItems).map((item, index) => (
          <AgendaCard card={item} key={index} />
        ))}
      </section>
      {visibleItems < innerBlocks.length && (
        <div className="agenda-see-all-btn">
        <AppButton onClick={handleLoadAllDebounced} text="SEE ALL" variant="btn-underline" icon="/icons/dropdown-arrow.svg" />
        </div>
      )}
    </main>
  );
};

export default AgendaSection;
