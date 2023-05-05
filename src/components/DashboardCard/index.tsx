import { useContext, useState} from "react"
import { AdminContext, IPost } from "../../providers/AdminContext"
import { StyleLi } from "./style"
import modal from "../../assets/modal.png"

import star from "../../assets/star.png"
import star2 from "../../assets/star2.png"
import heart from "../../assets/heart.png"
import heart2 from "../../assets/like2.png"

interface IPostProps {
    post: IPost
}


export const DashboardCard = ({post}: IPostProps) => {

    const {findPost} = useContext(AdminContext);

    const [favorite, setFavorite] = useState(star)
    const [like, setLike] = useState(heart)

    const editFav = () => {
        if(favorite === star) {
            setFavorite(star2)
        } else {
            setFavorite(star)
        }
    }

    const editLike = () => {
        if(like === heart) {
            setLike(heart2)
        } else {
            setLike(heart)
        }
    }

    return (
        <StyleLi>
            <div className={`div__styled ${post.techCategory.toLowerCase()}`}>
                <h1>{post.title}</h1>
                <div className="tech__container">
                    <h3>{post.techCategory}</h3>
                </div>
                <p>{post.description}</p>
                <img className="post__img" src={post.postImage} alt={post.techCategory}/>
                <div className="controlls__container">
                    <img className="btn_one" src={modal} alt="modal" onClick={() => findPost(post.id)}/>
                    <img className="btn_two" src={favorite} alt="favorite" onClick={() => editFav()}/>
                    <img className="btn_three" src={like} alt="like" onClick={() => editLike()}/>
                </div>
            </div>
        </StyleLi>
    )
}