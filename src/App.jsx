import css from "./App.module.css";

import AppNavigation from "./components/AppNavigation/AppNavigation";
import AppRoutes from "./components/AppRoutes/AppRoutes";

export default function App() {
  return (
    <div className={css.container}>
      <AppNavigation />
      <AppRoutes />
    </div>
  );
}
