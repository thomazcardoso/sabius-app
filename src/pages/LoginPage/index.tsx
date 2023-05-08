import { LoginForm } from "../../components/Form/LoginForm"
import { StylledLoginPage } from "./style"
import logo from "../../assets/Logo.svg"

export const LoginPage = () => {
    return(
        <StylledLoginPage>
            <img src={logo} alt="" />
            <h1>S A B I U S</h1>
            <LoginForm/>
            
        </StylledLoginPage>
    )
}