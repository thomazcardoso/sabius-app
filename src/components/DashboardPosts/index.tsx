import { useContext } from "react"
import { StyledUl } from "./style"
import { AdminContext, IPost } from "../../providers/AdminContext"
import { DashboardCard } from "../DashboardCard";


export const DashboardPost = () => {

    const {postsList} = useContext(AdminContext);

    return (
        <StyledUl>
            {postsList.map((post: IPost) => (
                <DashboardCard key={post.id}  post={post} />
            ))}
        </StyledUl>
    )
}