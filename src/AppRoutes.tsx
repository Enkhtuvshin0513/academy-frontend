import { Routes, Route, Navigate } from "react-router";
import { MainLayout } from "@/modules/app/MainLayout";
import { Home } from "@/modules/home/components/Home";
import { TopMovies } from "./modules/movie/components/TopMovies";
import { PopularMovies } from "./modules/movie/components/PopularMovies";
import { AllMovies } from "./modules/movie/components/AllMovie";
import { MovieDetails } from "./modules/movie/components/details/MovieDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies">
          <Route index element={<Navigate to="all" replace />} />
          <Route path="top250" element={<TopMovies />} />
          <Route path="popular" element={<PopularMovies />} />
          <Route path="all" element={<AllMovies />} />

          <Route path="details/:id" element={<MovieDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
