import styled, { css } from "styled-components"

import { Post, PostType } from "./post/Post"
import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react"
import { actionPropsType, addPostAction, changePostAction } from "../../redux/State"
import { change } from "redux-form"
import { postMessagesPropsType } from "../../redux/profile-reducer"


type MyPostType = {
    profile: postMessagesPropsType
    dispatch: (action: actionPropsType) => void
}

export const MyPost: React.FC<MyPostType> = ({ profile, dispatch }) => {

    let [error, setError] = useState<string | null>(null);

    const textRef = useRef<HTMLTextAreaElement>(null);
    let postArray = profile.postMessages.map(item => {
        return <Post key={item.id} icon={item.icon} message={item.message} likeCount={item.likeCount} id={item.id} />
    })

    function addMessagesHandler() {

        if (profile.postInputText.trim()) {
            dispatch(addPostAction())
        } else {
            setError('error')
        }

    }

    function changeTextareaTextHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(changePostAction(e.currentTarget.value))
        setError(null)
    }

    return (
        <StyledMyPost>
            <Header>My post</Header>

            <WrapperStyled>
                <TextAreaStyled $error={error} value={profile.postInputText} onChange={changeTextareaTextHandler} ref={textRef}></TextAreaStyled>
                {error && <div>Сообщение не должно состоять только из пробелов!</div>}
                <div><button disabled={!profile.postInputText} onClick={() => addMessagesHandler()}>Add post</button></div>
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

const TextAreaStyled = styled.textarea<{ $error: string | null }>`
border: 1px solid black;
${({ $error }) => $error && css<{ $error: string | null }>`
 border: 1px solid red;
`
    }`