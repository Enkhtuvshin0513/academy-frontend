import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams();

  return <h1>Movie details {id}</h1>;
};
