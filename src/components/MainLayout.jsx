import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <h1>Main Layout Component</h1>
      <Outlet />
    </>
  );
};
export default MainLayout;
