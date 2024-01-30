import styled, { css } from "styled-components"
import { Dialog } from "./Dialog"
import { Message, MessagePropsType } from "./Message"
import { actionPropsType } from "../redux/Store"
import React, { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler, useRef, useState } from "react"
import { addMessagesActionCreator, changeDialogsActionCreator, postDialogsPropsType } from "../redux/dialogs-reducer"
import { storeType } from "../../App"
import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"

type PostDataType = {
    message: string
    id: number
}

type DialogsDataType = {
    name: string
    id: number
}

type DialogsType = {

}

type DialogsPropsType = {
    postData: PostDataType[]
    addMessage: (value: string) => void
    dialogsData: DialogsDataType[]
    //  dialogs: postDialogsPropsType
}


export const Dialogs: React.FC<DialogsPropsType> = ({ dialogsData, addMessage,postData}) => {

    const [textValue, setTextValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    let data =  dialogsData.map(item => {
        return <Dialog key={item.id} {...item} />
    })
    let messages =  postData.map(item => {
        return <Message key={item.id} message={item.message} id={item.id} />
    })

    function addMessagesHeandler() {
        if (textValue.trim()) {
            addMessage(textValue)
            setTextValue('')
        
        } else {
            setError('error')
        }

    }

    function changeTextareaHandler(e: ChangeEvent<HTMLInputElement>) {
        setTextValue(e.currentTarget.value)
        setError(null)
    }

    function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            addMessagesHeandler()
        }
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
            <div><TextAreaStyled onKeyDown={onKeyDownHandler} $error={error} onChange={changeTextareaHandler} value={textValue} ></TextAreaStyled></div>
            {error && <div>Нельзя ввести одни пробелы!</div>}
            <button disabled={!textValue} onClick={addMessagesHeandler}>Добавить</button>
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

const TextAreaStyled = styled.input<{ $error: string | null }>`
  ${({ $error }) => $error && css<{ $error: string | null }>`
     border: 2px solid red;
  `}
`

type DialogPropsType = {
    store: storeType
}

// export class DialogsConteiner extends React.Component {


//     static contextType = StoreContext;
//     render() {

//         let value = this.context;
//         const addMessage = (val: string) => {
//             value.dispatch(addMessagesActionCreator(val))
//         }

//         return (
//             <Dialogs addMessage={addMessage} dialogs={value.getState().dialogs} />
//         )
//     }

// }

const mapStateToProps = (state: AppRootreducer) => {
    return {
        // dialogs: state.dialogs
        postData: state.dialogs.postData,
        dialogsData: state.dialogs.dialogsData
    }
}


const mapDispatchToProps = (dispatch: (action: actionPropsType) => void) => {
    return {
        addMessage(val: string) {
            dispatch(addMessagesActionCreator(val))
        }
    }
}


export let DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)