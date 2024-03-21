import { addStatusAp, addUsersAp, changeStatusAp } from "../../api/api";
import { PostType } from "../profile/posts/post/Post";
import iconPost from './../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg';

export const addPostAction = (value: string): AddPostActionType => {
    return {
        type: ADD_POST,
        value
    }
}


export const changePostAction = (value: string): ChangePostActionType => {
    return {
        type: CHANGE_TEXT,
        value
    }
}

export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';
export const CHANGE_LOAD = 'CHANGE-LOAD';
export const ADD_USER = 'ADD-USER';
export const CHANGE_ID = 'CHANGE_ID'
export const ADD_STATUS = 'ADD-STATUS'

export type postMessagesPropsType = {
    postMessages: Array<PostType>
    postInputText: string
    userId: number
    user: UserType | null
    status: string
}

export type ChangePostActionType = {
    type: typeof CHANGE_TEXT
    value: string
}

export type AddPostActionType = {
    type: typeof ADD_POST
    value: string
}

export type ContactsType = {
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

export type PhotosType = {
    small: string
    large: string

}

export type UserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}


export type AddUserType = {
    type: typeof ADD_USER
    user: UserType
}


export type ProfileActions = ChangePostActionType | AddPostActionType | AddUserType | changeUserIdType | addStatusType;

let initialState: postMessagesPropsType = {
    postMessages: [
        { message: 'Hello how are you?', likeCount: 10, icon: iconPost, id: 1 },
        { message: 'Did you go', likeCount: 6, icon: iconPost, id: 2 },
        { message: 'Did you drink wine?', likeCount: 57, icon: iconPost, id: 3 }
    ],
    postInputText: '',
    userId: 24630,
    user: null,
    status: ''
}

type changeUserIdType = {
    type: typeof CHANGE_ID
    id: number
}

export const changeUserId = (id: number) => {
    console.log(id)
    return {
        type: CHANGE_ID,
        id
    }
}


export const profileReducer = (state: postMessagesPropsType = initialState, action: ProfileActions): postMessagesPropsType => {

    switch (action.type) {
        case ADD_POST:
            return { ...state, postMessages: [...state.postMessages, { message: action.value, id: state.postMessages.length + 1, likeCount: 4, icon: iconPost }], postInputText: '' }
        case CHANGE_TEXT:
            return { ...state, postInputText: action.value }
        case ADD_USER:
            return { ...state, user: action.user }
        case CHANGE_ID:
            return {
                ...state, userId: action.id
            }
        case ADD_STATUS:
            return {
                ...state, status: action.payload.value
            }
        default:
            return state;
    }


}


export type addStatusType = ReturnType<typeof addStatus>

export const addStatus = (value: string) => {
    return {
        type: ADD_STATUS,
        payload: {
            value
        }
    } as const
}

export const addStatusAC = (id: number) => {
    return (dispatch: any) => {
        addStatusAp(id).then((val) => {
            dispatch(addStatus(val.data))
        })
    }
}

export const changeStatusAC = (value: string) => {
    return (dispatch: any) => {
        changeStatusAp(value)
            .then(val => {
                if (val.resultCode === 0) {
                    dispatch(addStatus(value))
                }
            })
    }
}


export const addUser = (user: UserType): AddUserType => {
    return {
        type: ADD_USER,
        user
    }
}



export const addUserTh = (params: number) => {
    return (dispatch: any) => {
        addUsersAp(params)
            .then((val) => {
                dispatch(addUser(val.data))
            })
    }
}


export const changeUserTh = (value: string) => {
    return (dispatch: any) => {
        changeStatusAp(value)
            .then((val: any) => {
                if (val.data.resultCode === 0) {
                    dispatch(addUser(val.data))
                }
            })
    }
}





