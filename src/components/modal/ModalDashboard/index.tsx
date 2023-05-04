import { useContext } from "react"
import close from "../../../assets/closemodal.svg"
import like from "../../../assets/heart.png"
import favorite from "../../../assets/star.png"
import { AdminContext } from "../../../providers/AdminContext"
import { ModalBackDropStyled } from "../../../styles/ModalBackDrop"


export const ModalDashboard = () => {
    
    const {postUser} = useContext(AdminContext)

    return (
        <ModalBackDropStyled role="dialog">
            <div className="container__modal">
            <div className="modal__header">
                <div>
                </div>
                <img src={close}/>
            </div>
            <div>
                <h1>{postUser?.title}</h1>
                <h3>{postUser?.techCategory}</h3>
                <p>{postUser?.description}</p>
                <span>Link: {postUser?.link}</span>
            </div>
            <div>
                <img src={favorite}/>
                <img src={like}/>
            </div>
            </div>
        </ModalBackDropStyled>
    )
}