import styled from "styled-components"
import { Dialog, DialogPropsType } from "./Dialog"
import { Message, MessagePropsType } from "./Message"
import { actionPropsType } from "../redux/Store"
import { ChangeEvent, useRef } from "react"
import { addMessagesActionCreator, changeDialogsActionCreator, postDialogsPropsType } from "../redux/dialogs-reducer"



type DialogsPropsType = {
    dialogs: postDialogsPropsType
    dispatch: (action: actionPropsType) => void
}


export const Dialogs: React.FC<DialogsPropsType> = ({ dialogs, dispatch }) => {
    const TextRef = useRef<HTMLTextAreaElement>(null);

    let data = dialogs.dialogsData.map(item => {
        return <Dialog key={item.id} {...item} />
    })
    let messages = dialogs.postData.map(item => {
        return <Message key={item.id} message={item.message} id={item.id} />
    })

    function addMessagesHeandler() {
        dispatch(addMessagesActionCreator())
    }

    function changeTextareaHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(changeDialogsActionCreator(e.currentTarget.value))
    }

    return (
        <StyledMessages>
            <Wrapper>
                <MessagesName>
                    {data}
                </MessagesName>
                <MessagesItem>
                    {messages}
                </MessagesItem>

            </Wrapper>
            <div><textarea onChange={changeTextareaHandler} value={dialogs.dialogsInputText} ref={TextRef}></textarea></div>
            <button disabled={!dialogs.dialogsInputText} onClick={addMessagesHeandler}>Добавить</button>
        </StyledMessages>
    )
}

const StyledMessages = styled.section`
  
`
const Wrapper = styled.div`
display: flex;
`
const MessagesName = styled.div`
margin-left: 10px;
& > div > a{
   text-decoration: none;
   color: white;
}
`
const MessagesItem = styled.div`
margin-left: 20px;
`