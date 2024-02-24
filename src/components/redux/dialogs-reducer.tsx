import { DialogPropsType } from "../dialogs/Dialog"
import { MessagePropsType } from "../dialogs/Message"



export type postDialogsPropsType = {
    dialogsData: Array<DialogPropsType>
    postData: Array<MessagePropsType>
    dialogsInputText: string
}

let initialState: postDialogsPropsType = {
    dialogsData: [
        { name: 'Андрей', id: 1 },
        { name: 'Иван', id: 2 },
        { name: 'Михаил', id: 3 },
    ],

    postData: [
        { message: 'Как дела', id: 1 },
        { message: 'Когда занятия?', id: 2 },
        { message: 'Кто знает отличие useEffect от useLayout?', id: 3 },
    ],
    dialogsInputText: ''
}


export const dialogsReducer = (state = initialState, action: DialogsType): postDialogsPropsType => {

    switch (action.type) {
        case ADD_DIALOGS:
            return { ...state, postData: [...state.postData, { message: action.value, id: state.postData.length + 1 }], dialogsInputText: '' }
        default:
            return state
    }


}


export type AddMessagesActionCreatorType = {
    type: typeof ADD_DIALOGS
    value: string
}

export const addMessage = (value: string): AddMessagesActionCreatorType => {
    return {
        type: ADD_DIALOGS,
        value
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



export const ADD_DIALOGS = 'ADD_DIALOGS';
export const CHANGE_TEXT_DIALOGS = 'CHANGE_TEXT_DIALOGS';