import { DialogPropsType } from '../dialogs/Dialog'
import { MessagePropsType } from '../dialogs/Message'
import iconPost from './../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'
import { PostType } from '../profile/posts/post/Post'
import girl from './../../images/gerl.jpg'




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
}

export type sidebarPropsType = {
    sidebarData: Array<sidebarObjPropsType>
}


export type statePropsType = {
    profile: postMessagesPropsType
    dialogs: postDialogsPropsType
    sidebar: sidebarPropsType
}

export let state: statePropsType = {
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
        ]
    },

    sidebar: {
        sidebarData: [
            { name: 'Sveta', id: 1, photo: girl },
            { name: 'Ivan', id: 2, photo: girl },
        ]
    }

}

let rerenderEntireThree = () => {

}

export const subscribe = (observer: () => void) => {
    rerenderEntireThree = observer;
}



export function addGetMessagePost() {
    if (state.profile.postInputText.trim() !== '') {
        let newObj = { message: state.profile.postInputText, id: state.profile.postMessages.length + 1, likeCount: 4, icon: iconPost }
        state = { ...state, profile: { ...state.profile, postMessages: [...state.profile.postMessages, newObj] } }
        state = { ...state, profile: { ...state.profile, postInputText: '' } }
        rerenderEntireThree()
    }

}



export function changeText(val: string) {
    state = { ...state, profile: { ...state.profile, postInputText: val } }
    rerenderEntireThree();
}
