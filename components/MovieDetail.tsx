import Image from "next/image";

const MovieDetail = async ({ idMovie }: { idMovie: string }) => {
  const url = `https://api.themoviedb.org/3/movie/${idMovie}?language=fr-FR`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.THEMOVIEDB_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const movieDetails = await response.json();

  return (
    <div className="mx-2 my-3">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
        alt="movie poster"
        width={300}
        height={600}
      />
      <h1 className="text-xl my-3">{movieDetails.original_title}</h1>
      <div className="my-3">
        <h2 className="text-lg underline">Résumé :</h2>
        <p>{movieDetails.overview}</p>
      </div>
      <div className="my-3">
        <h2 className="text-lg underline">Genres :</h2>
        <div className="flex flex-row gap-3">
          {movieDetails.genres.map((genre: { id: number; name: string }) => (
            <div
              key={genre.id}
              className="border rounded-2xl bg-blue-300 p-3 w-28"
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
      <table className="border-collapse border border-slate-500 border-spacing-4">
        <tbody>
          <tr>
            <td className="border border-slate-500 p-4">Date de sortie</td>
            <td className="border border-slate-500 p-4">
              {movieDetails.release_date}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 p-4">Durée (en min)</td>
            <td className="border border-slate-500 p-4">
              {movieDetails.runtime}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 p-4">Budget</td>
            <td className="border border-slate-500 p-4">
              {movieDetails.budget} $
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 p-4">Recette</td>
            <td className="border border-slate-500 p-4">
              {movieDetails.revenue} $
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 p-4">Note</td>
            <td className="border border-slate-500 p-4">
              {movieDetails.vote_average}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieDetail;
