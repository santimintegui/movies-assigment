import { useState } from "react";
import { searchMovies } from "../services/movies";

function useMovies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  async function getMovies({ search }: { search: string }) {
    setIsLoading(true);
    setError(null);
    searchMovies({ search }) // await?
      .then((data) => {
        if (data.Response === "False") {
          setData([]);
          setError("Erro trying to get movies. Try again.");
          return;
        }
        setData(data.Search);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  return { getMovies, data, isLoading, error };
}

export default useMovies;
