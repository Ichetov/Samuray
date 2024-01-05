import styled from "styled-components"

import { Post, PostType } from "./post/Post"
import { ProfileInfo } from "./profileInfo/ProfileInfo"


type MyPostType = {
    postMessages: Array<PostType>
}

export const MyPost: React.FC<MyPostType> = ({postMessages}) => {
    let postArray = postMessages.map(item => {
        return <Post key = {item.id} icon={item.icon} message={item.message} likeCount={item.likeCount} id={item.id}/>
    })
    return (
        <StyledMyPost>
            <Header>My post</Header>

            <WrapperStyled>
                <textarea></textarea>
                <div><button>Add post</button></div>
            </WrapperStyled>
            {postArray}
        </StyledMyPost>
    )
}

const StyledMyPost = styled.section`
padding: 10px;
`
const WrapperStyled = styled.div`
margin-bottom: 10px;
`
const Header = styled.h2`
  text-align: center;
`