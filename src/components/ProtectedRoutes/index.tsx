import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)
    
    return user ? (

    )
}