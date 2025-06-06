import { NavLink } from "react-router-dom";
import css from "./AppNavigation.module.css"
import clsx from 'clsx';

const getActiveLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AppNavigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getActiveLink}>Home</NavLink>
      <NavLink to="/contacts" className={getActiveLink}>Contacts</NavLink>                
    </nav>
  );
}