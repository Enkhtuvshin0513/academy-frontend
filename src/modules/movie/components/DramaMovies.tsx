import { useState, useEffect } from "react";
import type { IMovie } from "../types/movie";

export const DramaMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3000/movie/movies?genre=Drama")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLoading(false);
        setMovies(data);
      });
  }, []);

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <>
      {movies.map(movie => {
        return <p>{movie.title}</p>;
      })}
    </>
  );
};
