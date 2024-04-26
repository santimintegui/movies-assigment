import { useState } from "react";
import { getMovieById } from "../services/movies";

function useMovieById() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  // mejor practica para resolver los errores?
  async function getMovie({ id }: { id: string }) {
    setIsLoading(true);
    setError(null);
    getMovieById({ id })
      .then((data) => {
        if (data.Response === "False") {
          setData([]);
          setError("Erro trying to get movie. Try again.");
          return;
        }
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  return { getMovie, movie: data, isLoading, error };
}

export default useMovieById;
