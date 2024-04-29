type CardProps = {
  title: string;
  image: string;
  id: string;
  year: string;
};

function Card({ title, image, id, year }: CardProps) {
  return (
    <a
      key={id}
      className="grid grid-rows-[auto,auto,30px] justify-center gap-2 
      border-solid border-2 border-cyan-800 p-2 rounded-md 
      text-slate-900 bg-cyan-700
     hover:border-cyan-600"
      href={`/movies/${id}`}
    >
      <p className="font-bold text-xl">{title}</p>
      <img src={image} alt={title} />
      <p>{year}</p>
    </a>
  );
}

export default Card;
