import useFetch from "../hooks/useFetch";

type FetchProps = {
  url: string;
};

const Fetch = ({ url }: FetchProps) => {
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <h2>Fetch</h2>
      <div className="api-box">{JSON.stringify(data)}</div>
    </>
  );
};

export default Fetch;
