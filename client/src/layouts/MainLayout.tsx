import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div>
      <nav>Navbar</nav>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
};
export default MainLayout;
