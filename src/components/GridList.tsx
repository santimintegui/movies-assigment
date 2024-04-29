import Card from "./Card";

type GridListProps = {
  data: any;
};

function GridList({ data }: GridListProps) {
  return (
    <div className="grid grid-cols-auto-fill gap-5">
      {data.map((movie: any) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default GridList;
