import css from "./App.module.css";

import Layout from "./components/Layout/Layout";
import AppRoutes from "./components/AppRoutes/AppRoutes";

export default function App() {
  return (
    <div className={css.container}>
      
      <Layout>
         <AppRoutes />
      </Layout>
     
    </div>
  );
}
