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
            <div className={`div__styled ${post.techCategory.toLowerCase()}`}>
                <h1>{post.title}</h1>
                <div className="profile__container">
                    <img src={user?.image} alt={user?.name} />
                    <span>{user?.name}</span>
                    <p>|</p>
                    <h3>{post.techCategory}</h3>
                </div>
                <p>{post.description}</p>
                <img className="post__img" src={post.postImage} alt={post.techCategory}/>
                <div className="controlls__container">
                    <img src={modal} alt="modal"/>
                    <img src={star} alt="favorite"/>
                    <img src={heart} alt="like"/>
                </div>
            </div>
        </StyleLi>
    )
}