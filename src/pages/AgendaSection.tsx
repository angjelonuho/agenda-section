import AppSpinner from "../components/App/AppSpinner";
import useFetch from "../hooks/useFetchAgendaItems";
import AgendaHeaderMenu from "../components/Agenda/AgendaHeaderMenu";

const AgendaSection = () => {
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

  const header = data?.data?.blocks[0]?.attrs?.intro || "No header available";

  return (
    <AgendaHeaderMenu header={header} subheader={"hello"} timezone={"12"} />
  );
};

export default AgendaSection;
