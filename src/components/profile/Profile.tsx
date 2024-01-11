import styled from "styled-components"

import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { PostType } from "./posts/post/Post"
import { postMessagesPropsType } from "../redux/State"

type ProfilePropsType = {
    profile: postMessagesPropsType
    addGetMessagePost: () => void
    changeText: (val: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, addGetMessagePost, changeText}) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost changeText = {changeText} profile = {profile} addGetMessagePost = {addGetMessagePost}/>
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

