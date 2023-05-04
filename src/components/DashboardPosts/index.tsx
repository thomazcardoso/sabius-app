import { useContext } from "react"
import { StyledUl } from "./style"
import { AdminContext, IPost } from "../../providers/AdminContext"
import { DashboardCard } from "../DashboardCard";


export const DashboardPost = () => {

    const {postsList, search, filterSearch} = useContext(AdminContext);

    const currentPost = search !== "" ? filterSearch : postsList;

    return (
        <StyledUl>
            {currentPost.map((post: IPost) => (
                <DashboardCard key={post.id}  post={post} />
            ))}
        </StyledUl>
    )
}