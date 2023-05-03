import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<></>} />
        <Route path="/admin" element={<></>} />
      </Route>
      <Route path="*" element={<></>} />
    </Routes>
  );
};
