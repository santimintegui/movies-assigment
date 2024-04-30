// import { Movie } from "../types/movies";

const API_KEY = "9ca2c63b";

async function searchMovies({ search }: { search: string }): Promise<any> {
  return await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  ).then(async (response) => {
    const json: any = await response.json();
    return {
      ok: json.Response === "True",
      movies: json?.Search?.map((movie: any) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
      })),
      error: json?.Error,
    };
  });
}

async function getMovieById({ id }: { id: string }): Promise<any> {
  return await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(async (response) => {
      const json: any = await response.json();
      return {
        ok: json.Response === "True",
        error: json?.Error,
        movie: {
          id: json.imdbID,
          title: json.Title,
          year: json.Year,
          image: json.Poster,
          description: json.Plot,
          released: json.Released,
          genre: json.Genre,
          actors: json.Actors,
          director: json.Director,
        },
      };
    })
    .catch((error) => {
      console.error(error);
    });
}

export { searchMovies, getMovieById };
