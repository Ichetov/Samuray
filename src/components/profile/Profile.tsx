import styled from "styled-components"

import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { PostType } from "./posts/post/Post"

type ProfilePropsType = {
    postMessages: Array<PostType>
}

export const Profile: React.FC<ProfilePropsType> = ({postMessages}) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost postMessages = {postMessages}/>
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

