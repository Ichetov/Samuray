import styled from "styled-components"

import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { PostType } from "./posts/post/Post"
import { actionPropsType} from "../redux/Store"
import { postMessagesPropsType } from "../redux/profile-reducer"

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

