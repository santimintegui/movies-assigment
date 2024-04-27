import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

function useMovies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const previousSearch = useRef<string | null>(null);

  async function getMovies({ search }: { search: string }) {
    if (search === previousSearch.current) return;

    setIsLoading(true);
    setError(null);
    previousSearch.current = search;
    await searchMovies({ search })
      .then((data) => {
        if (data.Response === "False") {
          setData([]);
          setError(data.Error);
          return;
        }
        setData(data.Search);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  return { getMovies, movies: data, isLoading, error };
}

export default useMovies;
