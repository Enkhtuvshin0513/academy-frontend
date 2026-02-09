import { Outlet } from "react-router-dom";
import { NavigationHeader } from "./NavigationHeader";

export const MainLayout = () => {
  return (
    <div>
      <NavigationHeader />
      <Outlet />
    </div>
  );
};
