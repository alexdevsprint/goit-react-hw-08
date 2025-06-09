import css from "./App.module.css";

import Layout from "./components/Layout/Layout";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}
