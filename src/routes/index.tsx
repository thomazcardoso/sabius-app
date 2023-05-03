import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
<<<<<<< HEAD
import { AdmPage } from "../pages/admPage";
=======
import { NotFound } from "../pages/Notfound";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

>>>>>>> a553b516b31622b762346ed8c85ccc79c238768f

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<></>} />
        <Route path="/admin" element={<AdmPage />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};
