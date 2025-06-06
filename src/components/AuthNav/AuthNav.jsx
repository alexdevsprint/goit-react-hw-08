import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const getActiveLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AuthNav() {
  return (
    <nav className={css.nav}>
      <NavLink to="/register" className={getActiveLink}>Sign Up</NavLink>
      <NavLink to="/login" className={getActiveLink}>Login</NavLink>
    </nav>
  );
}
