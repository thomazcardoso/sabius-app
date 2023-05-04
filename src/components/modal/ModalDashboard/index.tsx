import { useContext } from "react"
import close from "../../../assets/closemodal.svg"
import like from "../../../assets/heart.png"
import favorite from "../../../assets/star.png"
import { AdminContext } from "../../../providers/AdminContext"
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop"
import { StyledContainerModal } from "./style"


export const ModalDashboard = () => {
    
    const {postUser} = useContext(AdminContext)

    return (
        <ModalBackDropStyled role="dialog">
            <StyledContainerModal className="container__modal">
                <div className="container__content">
                    <h1>{postUser?.title}</h1>
                    <h3>{postUser?.techCategory}</h3>
                    <p>{postUser?.description}</p>
                    <span>Link: {postUser?.link}</span>
                    <div>
                        <img src={favorite}/>
                        <img src={like}/>
                    </div>
                </div>
                <img className="img__close" src={close}/>

            </StyledContainerModal>
        </ModalBackDropStyled>
    )
}