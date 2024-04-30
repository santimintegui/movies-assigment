import { useParams } from "react-router-dom";
import useMovieById from "../hooks/useMovieById";
import { useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";

function MovieDetails() {
  const { id } = useParams();
  const { movie, error, getMovie } = useMovieById();

  useEffect(() => {
    if (id) {
      getMovie({ id });
    }
  }, [id]);

  return (
    <div className="flex justify-center justify-items-center items-center p-20">
      <ErrorAlert error={error ?? undefined} />
      {movie && (
        <div
          className="border-solid border-2 rounded-md border-cyan-900 p-10 grid grid-cols-2 gap-5
          bg-gradient-to-r from-cyan-700 to-cyan-900 text-slate-800
        "
        >
          <div className="flex flex-col gap-5">
            <h1 className=" font-bold text-3xl text-center text-black">
              {movie.title}
            </h1>
            <TextItems title="Description" value={movie.description} />
            <TextItems title="Publicated Date" value={movie.released} />
            <TextItems title="Genre" value={movie.genre} />
            <TextItems title="Actors" value={movie.actors} />
            <TextItems title="Director" value={movie.director} />
          </div>
          <div className="flex justify-center">
            <img src={movie.image} alt={movie.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;

function TextItems({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold  text-slate-950 text-xl">{title}</p>
      <p>{value}</p>
    </div>
  );
}
