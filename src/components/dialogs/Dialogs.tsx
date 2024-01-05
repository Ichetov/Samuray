import styled from "styled-components"
import { Dialog, DialogPropsType } from "./Dialog"
import { Message, MessagePropsType } from "./Message"
import { postDialogsPropsType } from "../redux/State"




type DialogsPropsType = {
    dialogs: postDialogsPropsType
}


export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {
    let data = dialogs.dialogsData.map(item => {
        return <Dialog key={item.id} {...item} />
    })
    let messages = dialogs.postData.map(item => {
      return <Message key={item.id} message={item.message} id = {item.id}/>
    })
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