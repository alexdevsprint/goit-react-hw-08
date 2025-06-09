import css from "./App.module.css";

import Layout from "./components/Layout/Layout";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user ...</strong>
  ) : (
    <div className={css.container}>
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
    
  );
}
