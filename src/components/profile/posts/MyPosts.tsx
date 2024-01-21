import styled, { css } from "styled-components"
import { Post } from "./post/Post"
import { ChangeEvent,useRef, useState } from "react"
import { postMessagesPropsType } from "../../redux/profile-reducer"


type MyPostType = {
    profile: postMessagesPropsType
    addPost: (value: string) => void
    setState: (value: { textValue: string }) => void
    value: string
}

export const MyPost: React.FC<MyPostType> = ({ profile, addPost, setState, value }) => {

    let [error, setError] = useState<string | null>(null);

    const textRef = useRef<HTMLInputElement>(null);
    let postArray = profile.postMessages.map(item => {
        return <Post key={item.id} icon={item.icon} message={item.message} likeCount={item.likeCount} id={item.id} />
    })

    function addMessagesHandler() {

        if (value.trim()) {
            addPost(value)
            setState({ textValue: '' })
        } else {
            setError('error')
        }

    }

    function changeTextareaTextHandler(e: ChangeEvent<HTMLInputElement>) {
        setState({ textValue: e.currentTarget.value })
        setError(null)
    }

    function addMessages(e: React.KeyboardEvent<HTMLInputElement>){
         if(e.key === 'Enter'){
            addMessagesHandler();
         }
    }

    return (
        <StyledMyPost>
            <Header>My post</Header>

            <WrapperStyled>

                <TextAreaStyled onKeyDown={addMessages} $error={error} value={value} onChange={changeTextareaTextHandler} ref={textRef} />
                {error && <div>Сообщение не должно состоять только из пробелов!</div>}
                <div><button disabled={!value} onClick={() => addMessagesHandler()}>Add post</button></div>
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

const TextAreaStyled = styled.input<{ $error: string | null }>`
border: 1px solid black;
${({ $error }) => $error && css<{ $error: string | null }>`
 border: 1px solid red;
`
    }`