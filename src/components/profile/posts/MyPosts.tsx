import styled from "styled-components"

import { Post, PostType } from "./post/Post"
import { ProfileInfo } from "./profileInfo/ProfileInfo"
import { useRef } from "react"


type MyPostType = {
    postMessages: Array<PostType>
    getMessagePost: (val: string) => void
}

export const MyPost: React.FC<MyPostType> = ({ postMessages, getMessagePost }) => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    let postArray = postMessages.map(item => {
        return <Post key={item.id} icon={item.icon} message={item.message} likeCount={item.likeCount} id={item.id} />
    })

    function addMessages() {
        if (textRef.current) {
            getMessagePost(textRef.current.value)
            textRef.current.value = ''
        }

    }

    return (
        <StyledMyPost>
            <Header>My post</Header>

            <WrapperStyled>
                <textarea ref={textRef}></textarea>
                <div><button onClick={() => addMessages()}>Add post</button></div>
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