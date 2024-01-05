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

type postMessagesPropsType = {
    postMessages: Array<PostType>
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
        ]
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
            {name: 'Sveta', id: 1, photo: girl},
            {name: 'Ivan', id: 2, photo: girl},
        ]
    }

}