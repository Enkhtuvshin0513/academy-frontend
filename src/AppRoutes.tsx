import { Routes, Route } from "react-router";
import App from "./App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>about</div>} />
    </Routes>
  );
};
