import useMovies from "../hooks/useMovies";
import GridList from "../components/GridList";
import { useCallback, useRef, useState } from "react";
import debounce from "just-debounce-it";
import ErrorAlert from "../components/ErrorAlert";
import { Loading } from "../components/Icons/Loading";

function MoviesSearch() {
  const [errorInput, setErrorInput] = useState<string | null>(null);
  const isFirstSearch = useRef(true);
  const { getMovies, movies, isLoading, error } = useMovies();

  const debouncedGetMovies = useCallback(
    debounce((search: any) => {
      getMovies({ search });
    }, 400),
    [getMovies]
  );

  function handleChange(event: any) {
    const search = event.target.value;
    isFirstSearch.current = false;

    if (search.trim() === "") {
      setErrorInput("Please enter a valid search");
      return;
    }

    setErrorInput(null);
    debouncedGetMovies(search);
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center pt-16">
      <header className=" w-64">
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search movie"
            className={`${
              errorInput ? "border border-red-600" : "border-none"
            } rounded-sm p-1 text-black outline-none w-full`}
            onChange={handleChange}
          />
          {errorInput && (
            <div className="text-red-600 text-sm">{errorInput}</div>
          )}
        </div>
        <ErrorAlert error={error ?? undefined} />
      </header>

      <main className="p-10 w-full">
        {isFirstSearch.current ? (
          <h1 className="text-center text-2xl font-bold animate-pulse">
            Welcome, write in the input to search movies!
          </h1>
        ) : isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <GridList data={movies} />
        )}
      </main>
    </div>
  );
}

export default MoviesSearch;
