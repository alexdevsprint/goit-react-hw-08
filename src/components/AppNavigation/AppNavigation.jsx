import { NavLink } from "react-router-dom";
import css from "./AppNavigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const getActiveLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AppNavigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getActiveLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getActiveLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
