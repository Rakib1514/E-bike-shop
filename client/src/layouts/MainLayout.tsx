import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import HeaderMarquee from "../components/marquee/HeaderMarquee";

const MainLayout = () => {
  return (
    <>
      <HeaderMarquee />
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};
export default MainLayout;
