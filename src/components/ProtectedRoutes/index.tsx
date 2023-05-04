import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { AdminProvider } from "../../providers/AdminContext"
import { Navigate, Outlet } from "react-router"

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)
    
    return user ? (
        <AdminProvider>
            <Outlet />
        </AdminProvider>
    ) : (
    <Navigate to="/"/>)
}