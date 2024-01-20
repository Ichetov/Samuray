import { DialogPropsType } from '../dialogs/Dialog'
import { MessagePropsType } from '../dialogs/Message'
import girl from './../../images/gerl.jpg'
import { ADD_POST, AddPostActionType, CHANGE_TEXT, ChangePostActionType, ProfileActions, postMessagesPropsType, profileReducer } from './profile-reducer';
import iconPost from './../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'
import { AddMessagesActionCreatorType, ChangeDialogsActionCreatorType, DialogsType, dialogsReducer, postDialogsPropsType } from './dialogs-reducer';


export type sidebarObjPropsType = {
    name: string
    id: number
    photo: string
}

export type sidebarPropsType = {
    sidebarData: Array<sidebarObjPropsType>
}

export type statePropsType = {
    profile: postMessagesPropsType
    dialogs: postDialogsPropsType
    sidebar: sidebarPropsType
}

export type actionPropsType = ChangePostActionType | AddPostActionType | ChangeDialogsActionCreatorType | AddMessagesActionCreatorType;

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


    dispatch(action: actionPropsType) {
        store._state.profile = profileReducer(store._state.profile, action as ProfileActions)
        store._state.dialogs = dialogsReducer(store._state.dialogs, action as  DialogsType)
        this._observerFunct(this._state);
    },



    changeText(val: string) {
        this._state = { ...this._state, profile: { ...this._state.profile, postInputText: val } }
        this._observerFunct(this._state);
    },
    addGetMessagePost() {
        // if (this._state.profile.postInputText.trim() !== '') {
        let newObj = { message: this._state.profile.postInputText, id: this._state.profile.postMessages.length + 1, likeCount: 4, icon: iconPost }
        this._state = { ...this._state, profile: { ...this._state.profile, postMessages: [...this._state.profile.postMessages, newObj] } }
        this._state = { ...this._state, profile: { ...this._state.profile, postInputText: '' } }
        this._observerFunct(this._state);
        // }

    },
    addDialogsMessage() {

        this._state = { ...this._state, dialogs: { ...this._state.dialogs, postData: [...this._state.dialogs.postData, { message: this._state.dialogs.dialogsInputText, id: this._state.dialogs.postData.length + 1 }] } }
        this._state = { ...this._state, dialogs: { ...this._state.dialogs, dialogsInputText: '' } }
        this._observerFunct(this._state);
    },

    addChangeTextMessage(value: string) {
        this._state = { ...this._state, dialogs: { ...this._state.dialogs, dialogsInputText: value } }
        this._observerFunct(this._state);
    }

};




export const addPostAction = (): AddPostActionType => {
    return {
        type: ADD_POST,
    }
}


export const changePostAction = (value: string): ChangePostActionType => {
    return {
        type: CHANGE_TEXT,
        value
    }
}









//  В state ссылка на старый объект осталась







