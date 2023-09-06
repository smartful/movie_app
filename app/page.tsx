import MovieList from "@/components/MovieList";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl my-2">Movie App</h1>
      <MovieList />
    </main>
  );
}
