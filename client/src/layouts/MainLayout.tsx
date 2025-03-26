import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar/>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};
export default MainLayout;
