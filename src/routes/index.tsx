import { Route, Router } from "react-router-dom"

const Rputer = () => {
    return (
        <Router>
            <Route path="/login" element={<></>} />
            <Route path="/register" element={<></>} />
            <Route path="/dashboard" element={<></>} />
            <Route path="/admin" element={<></>} />
        </Router>
    )
}