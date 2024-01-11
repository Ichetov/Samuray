import styled from "styled-components"

import { Post, PostType } from "./post/Post"
import { useRef } from "react"
import { postMessagesPropsType } from "../../redux/State"


type MyPostType = {
    profile: postMessagesPropsType
    addGetMessagePost: () => void
    changeText: (val: string) => void
}

export const MyPost: React.FC<MyPostType> = ({ profile, addGetMessagePost, changeText }) => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    let postArray = profile.postMessages.map(item => {
        return <Post key={item.id} icon={item.icon} message={item.message} likeCount={item.likeCount} id={item.id} />
    })

    function addMessages() {
        // if (textRef.current && textRef.current.value.trim() !== '') {
        //     addGetMessagePost(textRef.current.value)
        // }
        addGetMessagePost()
    }

    return (
        <StyledMyPost>
            <Header>My post</Header>

            <WrapperStyled>
                <textarea value={profile.postInputText} onChange={(e) => changeText(e.currentTarget.value)} ref={textRef}></textarea>
                <div><button disabled={!profile.postInputText} onClick={() => addMessages()}>Add post</button></div>
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