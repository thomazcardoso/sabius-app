import { useContext } from "react"
import { IPost } from "../../providers/AdminContext"
import { StyleLi } from "./style"
import { UserContext } from "../../providers/UserContext"
import modal from "../../assets/modal.png"
import star from "../../assets/star.png"
import heart from "../../assets/heart.png"

interface IPostProps {
    post: IPost
}


export const DashboardCard = ({post}: IPostProps) => {

    const {user} = useContext(UserContext)

    return (
        <StyleLi>
            <h1>{post.title}</h1>
            <div>
                <img src={user?.image} alt={user?.name} />
                <span>{user?.name}</span>
            </div>
            <p>{post.description}</p>
            <img src={post.postImage} alt={post.techCategory}/>
            <div>
                <img src={modal} alt="modal"/>
                <img src={star} alt="favorite"/>
                <img src={heart} alt="like"/>
            </div>
        </StyleLi>
    )
}