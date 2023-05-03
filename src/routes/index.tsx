import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { NotFound } from "../pages/Notfound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<></>} />
      <Route path="/register" element={<></>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<></>} />
        <Route path="/admin" element={<></>} />
      </Route>
      <Route path="*" element={<></>} />
    </Routes>
  );
};
