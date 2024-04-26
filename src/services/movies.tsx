async function searchMovies({ search }: { search: string }) {
  const API_KEY = "9ca2c63b";
  return await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  ).then((response) => {
    return response.json();
  });
  // usar un mapped en utils , aca o en el hook
}

async function getMovieById({ id }: { id: string }) {
  const API_KEY = "9ca2c63b";
  return await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`).then(
    (response) => {
      return response.json();
    }
  );
}

export { searchMovies, getMovieById };
