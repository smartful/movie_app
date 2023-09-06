import Image from "next/image";
import Link from "next/link";

const MovieList = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.THEMOVIEDB_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const movieList = await response.json();

  return (
    <div className="mx-2">
      <h1 className="text-lg my-2">Top Films</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movieList.results.map((movie: any) => (
          <div className="p-2 border-2 border-blue-950 rounded">
            <div className="flex flex-row justify-between items-center">
              <Image
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt="movie poster"
                width={150}
                height={300}
              />
              <span className="p-2 h-10 text-white bg-red-500 rounded-2xl">
                <Link href={`/details/${movie.id}`}>Savoir +</Link>
              </span>
            </div>
            <h2 className="text-lg">{movie.original_title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
