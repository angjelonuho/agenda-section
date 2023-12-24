import AppSpinner from "../components/App/AppSpinner";
import useFetch from "../hooks/useFetchAgendaItems";
import AgendaHeaderMenu from "../components/Agenda/AgendaHeaderMenu";
import AgendaCard from "../components/Agenda/AgendaCard";
import "./AgendaSection.css";

const AgendaSection: React.FC = () => {
  const { data, isLoading, error } = useFetch();

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
  const innerBlocks: Api.EventAgenda.IInnerBlock[] = data?.data?.blocks[0]?.innerBlocks || []; 

  return (
    <main className="agenda-section-container">
      <AgendaHeaderMenu header={header} subheader={subheader} />
      <section className="agenda-card-grid">
        {innerBlocks.map((item, index) => (
          <AgendaCard card={item} key={index} />
        ))}
      </section>
    </main>
  );
};

export default AgendaSection;
