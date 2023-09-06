import MovieDetail from "@/components/MovieDetail";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col mx-2">
      <h1 className="text-lg">Détails du film</h1>
      <MovieDetail idMovie={params.id} />
    </div>
  );
}
