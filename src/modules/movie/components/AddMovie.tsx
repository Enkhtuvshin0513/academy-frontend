import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovie";

export const AddMovie = () => {
  const inputRef = useRef(null);
  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    const value = inputRef?.current?.value;

    if (!value) {
      window.alert("Title oruulna uu");
    }

    addMovie();
  };
  return (
    <div>
      <input ref={inputRef} placeholder="Movie title" />
      <button onClick={movieAdd}>add movie</button>
    </div>
  );
};
