import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  
  return (
    <div className={css.wrapper}>
      <p className={css.user}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
