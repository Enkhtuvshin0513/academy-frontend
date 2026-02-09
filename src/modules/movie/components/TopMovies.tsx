import { Card, CardHeader } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";

export const TopMovies = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickMovie = movie => {
    // navigate(`/movies/details/${movie._id}`);

    setSearchParams({ hi: "123" });
  };

  const movies = [
    {
      title: "Titanic",
      _id: "12312901-23"
    }
  ];

  return movies.map(movie => {
    return (
      <Card
        onClick={() => {
          onClickMovie(movie);
        }}
      >
        <CardHeader>{movie.title}</CardHeader>
        <CardHeader>{movie.title}</CardHeader>
      </Card>
    );
  });
};
