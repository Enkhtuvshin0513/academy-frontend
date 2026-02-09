import { Routes, Route } from "react-router";
import { MainLayout } from "./modules/app/MainLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div>123</div>} />
        <Route path="about" element={<div>about</div>} />
      </Route>
    </Routes>
  );
};
