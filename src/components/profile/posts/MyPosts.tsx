import styled from "styled-components"

import { Post, PostType } from "./post/Post"
import { ChangeEvent, ChangeEventHandler, useRef } from "react"
import { actionPropsType, addPostAction, changePostAction, postMessagesPropsType } from "../../redux/State"


type MyPostType = {
    profile: postMessagesPropsType
    dispatch: (action: actionPropsType) => void
}

export const MyPost: React.FC<MyPostType> = ({ profile, dispatch}) => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    let postArray = profile.postMessages.map(item => {
        return <Post key={item.id} icon={item.icon} message={item.message} likeCount={item.likeCount} id={item.id} />
    })

    function addMessages() {
        // if (textRef.current && textRef.current.value.trim() !== '') {
        //     addGetMessagePost(textRef.current.value)
        // }
        dispatch(addPostAction())
    }

    return (
        <StyledMyPost>
            <Header>My post</Header>

            <WrapperStyled>
                <textarea value={profile.postInputText} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => dispatch(changePostAction(e.currentTarget.value))} ref={textRef}></textarea>
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