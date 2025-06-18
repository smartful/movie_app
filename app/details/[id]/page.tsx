import MovieDetail from "@/components/MovieDetail";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="flex flex-col mx-2">
      <h1 className="text-lg">Détails du film</h1>
      <MovieDetail idMovie={id} />
    </div>
  );
}
