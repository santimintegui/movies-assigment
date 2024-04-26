import useMovies from "../hooks/useMovies";
import GridList from "../components/GridList";
import { SearchForm } from "../components/Form";

function MoviesSearch() {
  const { getMovies, data, isLoading, error } = useMovies();

  return (
    <div className="flex flex-col gap-10 justify-center items-center pt-16">
      <SearchForm succesSubmit={getMovies} />
      <div className="p-10 w-full">
        {error && <p>{error}</p>}
        {!isLoading && <GridList data={data} />}
      </div>
    </div>
  );
}

export default MoviesSearch;
