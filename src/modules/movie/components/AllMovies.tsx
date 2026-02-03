import { getMovies } from "../hooks/getMovies";

export const AllMovies = () => {
  const { movies, loading } = getMovies();

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <>
      {movies.map(movie => {
        return <h1>{movie.title}</h1>;
      })}
    </>
  );
};
