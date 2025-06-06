import css from "./AppBar.module.css";
import AppNavigation from "../AppNavigation/AppNavigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <AppNavigation />
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && <AuthNav />}
      
    </header>
  );
}
