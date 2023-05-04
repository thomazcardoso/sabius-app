import { useContext } from "react"
import { DashboardPost } from "../../components/DashboardPosts"
import { Header } from "../../components/header/Header"
import { AdminContext } from "../../providers/AdminContext"
import { ModalDashboard } from "../../components/modal/ModalDashboard"


export const Dashboard = () => {

    const {isOpen} = useContext(AdminContext);

    return (
        <>
            <Header />
            <DashboardPost />
            {isOpen === "Read" ? <ModalDashboard /> : null}
        </>
    )
}