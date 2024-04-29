import useMovies from "../hooks/useMovies";
import GridList from "../components/GridList";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

function MoviesSearch() {
  const [errorInput, setErrorInput] = useState<string | null>(null);

  const { getMovies, movies, isLoading, error } = useMovies();

  const debouncedGetMovies = useCallback(
    debounce((search: any) => {
      getMovies({ search });
    }, 400),
    [getMovies]
  );

  function handleChange(event: any) {
    const search = event.target.value;

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
        {error && (
          <div className=" w-64 h-fit bg-red-600 mt-5 p-3 border rounded-xl border-red-900 text-black text-center">
            Error: {error}
          </div>
        )}
      </header>

      <main className="p-10 w-full">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <GridList data={movies} />
        )}
      </main>
    </div>
  );
}

export default MoviesSearch;
