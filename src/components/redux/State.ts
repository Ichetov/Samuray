import { DialogPropsType } from '../dialogs/Dialog'
import { MessagePropsType } from '../dialogs/Message'
import iconPost from './../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'
import { PostType } from '../profile/posts/post/Post'
import girl from './../../images/gerl.jpg'


// export let state: statePropsType = {
//     profile: {
//         postMessages: [
//             { message: 'Hello how are you?', likeCount: 10, icon: iconPost, id: 1 },
//             { message: 'Did you go', likeCount: 6, icon: iconPost, id: 2 },
//             { message: 'Did you drink wine?', likeCount: 57, icon: iconPost, id: 3 }
//         ],
//         postInputText: ''
//     },
//     dialogs: {
//         dialogsData: [
//             { name: 'Андрей', id: 1 },
//             { name: 'Иван', id: 2 },
//             { name: 'Михаил', id: 3 },
//         ],

//         postData: [
//             { message: 'Как дела', id: 1 },
//             { message: 'Когда занятия?', id: 2 },
//             { message: 'Кто знает отличие useEffect от useLayout?', id: 3 },
//         ]
//     },

//     sidebar: {
//         sidebarData: [
//             { name: 'Sveta', id: 1, photo: girl },
//             { name: 'Ivan', id: 2, photo: girl },
//         ]
//     }

// }

// let rerenderEntireThree = () => {

// }

// export const subscribe = (observer: () => void) => {
//     rerenderEntireThree = observer;
// }



// export function addGetMessagePost() {
//     if (state.profile.postInputText.trim() !== '') {
//         let newObj = { message: state.profile.postInputText, id: state.profile.postMessages.length + 1, likeCount: 4, icon: iconPost }
//         state = { ...state, profile: { ...state.profile, postMessages: [...state.profile.postMessages, newObj] } }
//         state = { ...state, profile: { ...state.profile, postInputText: '' } }
//         rerenderEntireThree()
//     }

// }


// export function changeText(val: string) {
//     state = { ...state, profile: { ...state.profile, postInputText: val } }
//     rerenderEntireThree();
// }


const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';

const ADD_DIALOGS = 'ADD_DIALOGS';
const CHANGE_TEXT_DIALOGS = 'CHANGE_TEXT_DIALOGS';


export type sidebarObjPropsType = {
    name: string
    id: number
    photo: string
}

export type postMessagesPropsType = {
    postMessages: Array<PostType>
    postInputText: string
}

export type postDialogsPropsType = {
    dialogsData: Array<DialogPropsType>
    postData: Array<MessagePropsType>
    dialogsInputText: string
}

export type sidebarPropsType = {
    sidebarData: Array<sidebarObjPropsType>
}


export type statePropsType = {
    profile: postMessagesPropsType
    dialogs: postDialogsPropsType
    sidebar: sidebarPropsType
}

export type actionPropsType = {
    type: string
    value?: string
}

export type storePropsType = {
    _state: statePropsType
    changeText: (value: string) => void
    addGetMessagePost: () => void
    getState: () => statePropsType
    _observerFunct: Function
    subscribe: Function
    dispatch: (action: actionPropsType) => void
    addDialogsMessage: () => void
    addChangeTextMessage: (value: string) => void

}


export const store: storePropsType = {
    _state: {
        profile: {
            postMessages: [
                { message: 'Hello how are you?', likeCount: 10, icon: iconPost, id: 1 },
                { message: 'Did you go', likeCount: 6, icon: iconPost, id: 2 },
                { message: 'Did you drink wine?', likeCount: 57, icon: iconPost, id: 3 }
            ],
            postInputText: ''
        },
        dialogs: {
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
        },

        sidebar: {
            sidebarData: [
                { name: 'Sveta', id: 1, photo: girl },
                { name: 'Ivan', id: 2, photo: girl },
            ]
        }
    },

    _observerFunct() {

    },

    subscribe(sub: () => void) {
        this._observerFunct = sub
    },

    getState() {
        return this._state;
    },



    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this.addGetMessagePost()
        }
        if (action.type === 'CHANGE-TEXT') {
            if (action.value) {
                this.changeText(action.value)
            }

        }
        if (action.type === ADD_DIALOGS) {
            this.addDialogsMessage()
        }
        if (action.type === CHANGE_TEXT_DIALOGS) {
            if (action.value) {
                this.addChangeTextMessage(action.value)
            }

        }
    },

    changeText(val: string) {
        this._state = { ...this._state, profile: { ...this._state.profile, postInputText: val } }
        this._observerFunct(this._state);
    },
    addGetMessagePost() {
        if (this._state.profile.postInputText.trim() !== '') {
            let newObj = { message: this._state.profile.postInputText, id: this._state.profile.postMessages.length + 1, likeCount: 4, icon: iconPost }
            this._state = { ...this._state, profile: { ...this._state.profile, postMessages: [...this._state.profile.postMessages, newObj] } }
            this._state = { ...this._state, profile: { ...this._state.profile, postInputText: '' } }
            this._observerFunct(this._state);
        }

    },
    addDialogsMessage() {
        if (this._state.dialogs.dialogsInputText.trim() !== '') {
            this._state = { ...this._state, dialogs: { ...this._state.dialogs, postData: [...this._state.dialogs.postData, { message: this._state.dialogs.dialogsInputText, id: this._state.dialogs.postData.length + 1 }] } }
            this._state = {...this._state, dialogs:{...this._state.dialogs, dialogsInputText: ''}}
            this._observerFunct(this._state);
        }
    },

    addChangeTextMessage(value: string) {
        this._state = { ...this._state, dialogs: { ...this._state.dialogs, dialogsInputText: value } }
        this._observerFunct(this._state);
    }

}




type AddMessagesActionCreatorType = {
    type: typeof ADD_DIALOGS
}

export const addMessagesActionCreator = (): AddMessagesActionCreatorType => {
    return {
        type: ADD_DIALOGS
    }
}

type ChangeDialogsActionCreatorType = {
    type: typeof CHANGE_TEXT_DIALOGS
    value: string
}


export const changeDialogsActionCreator = (value: string): ChangeDialogsActionCreatorType => {
    return {
        type: CHANGE_TEXT_DIALOGS,
        value
    }
}


type AddPostActionType = {
    type: typeof ADD_POST
}

export const addPostAction = (): AddPostActionType => {
    return {
        type: ADD_POST,
    }
}

type ChangePostActionType = {
    type: typeof CHANGE_TEXT
    value: string
}

export const changePostAction = (value: string): ChangePostActionType => {
    return {
        type: CHANGE_TEXT,
        value
    }
}


