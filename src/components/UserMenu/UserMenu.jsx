import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import {selectUser} from "../../redux/auth/selectors"

export default function UserMenu() {
  const user = useSelector(selectUser);
  const handleLogOut = () => {};
  return (
    <div className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
