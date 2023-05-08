import { RegisterForm } from "../../components/Form/RegisterForm"
import { StylledRegisterPage } from "./style"
import logo from "../../assets/LogoBig.svg"
import { BackButton } from "../../styles/buttons"

export const RegisterPage = () => {
    return(
        <StylledRegisterPage>
            <div className="col-left">
                <div className="header">
                    <h1>S A B I U S</h1>
                    <BackButton to={"/"}>Voltar</BackButton>
                </div>
                <div className="form">
                    <RegisterForm/>  
                </div>
            </div>
                <img src={logo} alt="Logo" />
        </StylledRegisterPage>
    )
}