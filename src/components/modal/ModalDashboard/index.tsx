import { useContext } from "react"
import close from "../../../assets/closemodal.svg"
import like from "../../../assets/heart.png"
import favorite from "../../../assets/star.png"
import { AdminContext } from "../../../providers/AdminContext"
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop"
import { StyledContainerModal } from "./style"



export const ModalDashboard = () => {
    
    const {postUser, closeModal} = useContext(AdminContext)

    return (
        <ModalBackDropStyled role="dialog">
            <StyledContainerModal className="container__modal">
                <div className="container__content">
                    <h1>{postUser?.title}</h1>
                    <h3>{postUser?.techCategory}</h3>
                    <p>{postUser?.description}</p>
                    <a href={postUser?.link}>{postUser?.link}</a>
                    <div className="controlls__container--modal">
                        <img className="fav__modal" src={favorite}/>
                        <img className="like__modal" src={like}/>
                    </div>
                </div>
                <img className="img__close" src={close} onClick={closeModal}/>
            </StyledContainerModal>
        </ModalBackDropStyled>
    )
}