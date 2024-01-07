import styled from "styled-components"

import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { PostType } from "./posts/post/Post"

type ProfilePropsType = {
    postMessages: Array<PostType>
    getMessagePost: (val: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({postMessages, getMessagePost}) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost postMessages = {postMessages} getMessagePost = {getMessagePost}/>
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

