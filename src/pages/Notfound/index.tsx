import { StyledNotPage } from "./style"
import not from "../../assets/NotFound.svg"
import { Link } from "react-router-dom"


export const NotFound = () => {

    return (
        <StyledNotPage>
            <div>
                <h1>OPS, NÃO ENCONTRAMOS ESSA PÁGINA!!!</h1>
                <Link to={"/"}>Voltar</Link>
            </div>
            <img src={not} alt="IconeLogo" />
        </StyledNotPage>
    )
}