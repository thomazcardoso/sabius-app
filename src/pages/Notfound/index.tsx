import { StyledNotPage } from "./style"
import not from "../../assets/NotFound.svg"


export const NotFound = () => {

    return (
        <StyledNotPage>
            <h1>OPS, NÃO ENCONTRAMOS ESSA PÁGINA!!!</h1>
            <img src={not} alt="IconeLogo" />
        </StyledNotPage>
    )
}