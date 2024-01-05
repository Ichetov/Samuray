import styled from "styled-components"
import { Container } from "../Container"
import { NavLink } from "react-router-dom"
import { Dialog, DialogPropsType } from "./Dialog"
import { Message, MessagePropsType } from "./Message"


type DialogsPropsType = {
    dialogsData: Array<DialogPropsType>
    postData: Array<MessagePropsType>
}


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, postData}) => {
    let data = dialogsData.map(item => {
        return <Dialog key={item.id} {...item} />
    })
    let messages = postData.map(item => {
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