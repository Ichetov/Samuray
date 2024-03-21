import styled, { css } from "styled-components"
import { Dialog } from "./Dialog"
import { Message, MessagePropsType } from "./Message"
import React, { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler, useRef, useState } from "react"
import { addMessage, changeDialogsActionCreator, postDialogsPropsType } from "../redux/dialogs-reducer"
import { storeType } from "../../App"
import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"
import { Navigate } from "react-router-dom"
import { redirect } from "../../helper/helper"
import { compose } from "redux"


type DialogsDataType = {
    name: string
    id: number
}


type MapStateToPropsType = {
    postData: MessagePropsType[]
    dialogsData: DialogsDataType[]
    isAuth: boolean
}


type MapDispatchToPropsType = {
    addMessage: (value: string) => void
}

type OwnPropsType = {

}

type DialogsConteinerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


export const Dialogs: React.FC<DialogsConteinerType> = ({ isAuth, dialogsData, addMessage, postData }) => {



    const [textValue, setTextValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    let data = dialogsData.map(item => {
        return <Dialog key={item.id} {...item} />
    })
    let messages = postData.map(item => {
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
            <button disabled={!textValue || !!error} onClick={addMessagesHeandler}>Добавить</button>
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


const mapStateToProps = (state: AppRootreducer): MapStateToPropsType => {
    return {
        // dialogs: state.dialogs
        postData: state.dialogs.postData,
        dialogsData: state.dialogs.dialogsData,
        isAuth: state.header.isAuth
    }
}


export let DialogsConteiner = compose(
    redirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, { addMessage }),
)(Dialogs)

// export let DialogsConteiner = redirect(connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, { addMessage })(Dialogs))