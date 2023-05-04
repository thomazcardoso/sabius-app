import { useContext} from "react"
import { AdminContext, IPost } from "../../providers/AdminContext"
import { StyleLi } from "./style"
import { UserContext } from "../../providers/UserContext"
import modal from "../../assets/modal.png"
import star from "../../assets/star.png"
import heart from "../../assets/heart.png"

interface IPostProps {
    post: IPost
}


export const DashboardCard = ({post}: IPostProps) => {

    const {user} = useContext(UserContext);

    const {findPost} = useContext(AdminContext);

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
                    <img className="btn_one" src={modal} alt="modal" onClick={() => findPost(post.id)}/>
                    <img className="btn_two" src={star} alt="favorite" onClick={() => console.log("favorite")}/>
                    <img className="btn_three" src={heart} alt="like" onClick={() => console.log("like")}/>
                </div>
            </div>
        </StyleLi>
    )
}