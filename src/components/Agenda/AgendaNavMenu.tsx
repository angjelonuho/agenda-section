import useFetch from "../../hooks/useFetch";

const AgendaNavMenu = () => {
  const { data, isLoading, error } = useFetch(
    "https://staging17.o9solutions.com/wp-json/o9/v1/page",
    "POST",
    { post_id: 41298 }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as any)?.message ?? "unknown error"}</div>;
  }

  return (
    <header role="navigation">
      <p>{data?.data?.blocks[0].attrs.intro}</p>
    </header>
  );
};

export default AgendaNavMenu;
