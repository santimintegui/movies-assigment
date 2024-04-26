type CardProps = {
  Title: string;
  Poster: string;
  imdbID: string;
  Year: string;
};

function Card({ Title, Poster, imdbID, Year }: CardProps) {
  return (
    <a
      key={imdbID}
      className="grid grid-rows-[auto,auto,30px] justify-center gap-2 
      border-solid border-2 border-cyan-800 p-2 rounded-md 
      text-slate-900 bg-cyan-700
     hover:border-cyan-600"
      href={`/movies/${imdbID}`}
    >
      <p className="font-bold text-xl">{Title}</p>
      <img src={Poster} alt={Title} />
      <p>{Year}</p>
    </a>
  );
}

export default Card;
