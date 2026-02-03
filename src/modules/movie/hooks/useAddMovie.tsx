import { useMutation } from "@tanstack/react-query";

export const useAddMovie = () => {
  const { mutate } = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:3000/movie/addMovie`, {
        method: "POST"
      });
    }
  });

  return { addMovie: mutate };
};
