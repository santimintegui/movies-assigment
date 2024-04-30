import { useState } from "react";
import { getMovieById } from "../services/movies";

function useMovieById() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  async function getMovie({ id }: { id: string }) {
    setIsLoading(true);
    setError(null);
    getMovieById({ id })
      .then(({ ok, error, movie }) => {
        if (!ok) {
          setData(null);
          setError(error);
          return;
        }
        setData(movie);
      })
      .catch((error) => {
        setData([]);
        setError(error ?? "Erro trying to get movie. Try again.");
      })
      .finally(() => setIsLoading(false));
  }

  return { getMovie, movie: data, isLoading, error };
}

export default useMovieById;
