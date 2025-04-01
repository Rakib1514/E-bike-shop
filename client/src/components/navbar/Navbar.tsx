import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="bg-secondary w-full font-body">
      <div className="container mx-auto flex items-center justify-between px-0.5 py-2">
        <div className="brand__logo text-primary text-5xl font-semibold uppercase font-heading">
          <span>E-Bike</span>
        </div>
        <nav className="nav__links text-white">
          <ul className="flex gap-6 text-xl">
            <li className="nav__link">
              <NavLink to={"/"}>Electric bike</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to={"/"}>Spare parts</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to={"/"}>Accessories</NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav__icon">
          <ul className="flex items-center justify-center gap-6 text-white text-xl">
            <li>
              <NavLink to={"/"}>
                <IoHeartOutline />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <IoCartOutline />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <IoPersonOutline />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
