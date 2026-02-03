import { useState } from "react";
import { AllMovies } from "./AllMovies";
import { DramaMovies } from "./DramaMovies";

export const MovieMain = () => {
  const [dataType, setDataType] = useState<string>("all");

  const changeDataType = (type: string) => {
    setDataType(type);
  };
  return (
    <>
      <button onClick={() => changeDataType("all")}>all movies</button>
      <button onClick={() => changeDataType("drama")}>Drama movies</button>
      {dataType === "all" ? <AllMovies /> : <DramaMovies />}
    </>
  );
};
