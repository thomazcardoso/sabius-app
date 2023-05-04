import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { AdmPage } from "../pages/AdminPage/admPage";
import { NotFound } from "../pages/Notfound";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdmPage />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};
