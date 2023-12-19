import AppSpinner from "../components/App/AppSpinner";
import useFetch from "../hooks/useFetchAgendaItems";
import AgendaHeaderMenu from "../components/Agenda/AgendaHeaderMenu";

const AgendaSection = () => {
  const apiUrl = "https://staging17.o9solutions.com/wp-json/o9/v1/page";
  const { data, isLoading, error } = useFetch(apiUrl, "POST", {
    post_id: 41298,
  });

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
