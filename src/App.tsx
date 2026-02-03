import { useState } from "react";
import "./App.css";
import { AllMovies } from "./modules/movie/components/AllMovies";
import { DramaMovies } from "./modules/movie/components/DramaMovies";

function App() {
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
}

export default App;
