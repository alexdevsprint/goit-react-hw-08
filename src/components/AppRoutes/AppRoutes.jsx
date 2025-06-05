import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
}
