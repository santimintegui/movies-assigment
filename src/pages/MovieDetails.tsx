import { useParams } from "react-router-dom";
import useMovieById from "../hooks/useMovieById";
import { useEffect } from "react";

function MovieDetails() {
  const { id } = useParams();
  const { movie, isLoading, error, getMovie } = useMovieById();

  useEffect(() => {
    if (id) {
      getMovie({ id });
    }
  }, [id]);

  return (
    <div className="flex justify-center justify-items-center items-center p-20">
      {movie && (
        <div
          className="border-solid border-2 rounded-md border-cyan-900 p-10 grid grid-cols-2 gap-5
          bg-gradient-to-r from-cyan-700 to-cyan-900 text-slate-800
        "
        >
          <div className="flex flex-col gap-5">
            <h1 className=" font-bold text-3xl text-center text-black">
              {movie.Title}
            </h1>
            <TextITems title="Description" value={movie.Plot} />
            <TextITems title="Publicated Date" value={movie.Released} />
            <TextITems title="Genre" value={movie.Genre} />
            <TextITems title="Actors" value={movie.Actors} />
            <TextITems title="Director" value={movie.Director} />
          </div>
          <div className="flex justify-center">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;

function TextITems({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold  text-slate-950 text-xl">{title}</p>
      <p>{value}</p>
    </div>
  );
}
