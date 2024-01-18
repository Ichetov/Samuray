import { DialogPropsType } from "../dialogs/Dialog"
import { MessagePropsType } from "../dialogs/Message"
import { actionPropsType } from "./State"





export const dialogsReducer = (state: postDialogsPropsType, action: DialogsType) => {

    switch (action.type) {
        case ADD_DIALOGS:
            state = { ...state, postData: [...state.postData, { message: state.dialogsInputText, id: state.postData.length + 1 }] }
            state = { ...state, dialogsInputText: '' }
            return state
            break;
        case CHANGE_TEXT_DIALOGS:
            state = { ...state, dialogsInputText: action.value }
            return state
        default:
            return state
    }


}



export type AddMessagesActionCreatorType = {
    type: typeof ADD_DIALOGS
}

export const addMessagesActionCreator = (): AddMessagesActionCreatorType => {
    return {
        type: ADD_DIALOGS
    }
}

export type ChangeDialogsActionCreatorType = {
    type: typeof CHANGE_TEXT_DIALOGS
    value: string
}

export type DialogsType = ChangeDialogsActionCreatorType | AddMessagesActionCreatorType;


export const changeDialogsActionCreator = (value: string): ChangeDialogsActionCreatorType => {
    return {
        type: CHANGE_TEXT_DIALOGS,
        value
    }
}

export type postDialogsPropsType = {
    dialogsData: Array<DialogPropsType>
    postData: Array<MessagePropsType>
    dialogsInputText: string
}

export const ADD_DIALOGS = 'ADD_DIALOGS';
export const CHANGE_TEXT_DIALOGS = 'CHANGE_TEXT_DIALOGS';