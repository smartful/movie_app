import MovieCard from "./MovieCard";

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
    <div className="mx-2 mb-4">
      <h1 className="text-lg my-2">Top Films</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movieList.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            original_title={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
