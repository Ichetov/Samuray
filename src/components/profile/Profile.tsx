import styled from "styled-components"

import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { PostType } from "./posts/post/Post"
import { actionPropsType, postMessagesPropsType } from "../redux/State"

type ProfilePropsType = {
    profile: postMessagesPropsType
    dispatch: (action: actionPropsType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, dispatch}) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost  profile = {profile} dispatch = {dispatch}/>
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

