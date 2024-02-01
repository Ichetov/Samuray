import { PostType } from "../profile/posts/post/Post";
import iconPost from './../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'

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

export type postMessagesPropsType = {
    postMessages: Array<PostType>
    postInputText: string
}

export type ChangePostActionType = {
    type: typeof CHANGE_TEXT
    value: string
}

export type AddPostActionType = {
    type: typeof ADD_POST
    value: string
}

export type ProfileActions = ChangePostActionType | AddPostActionType;

let initialState: postMessagesPropsType = {
    postMessages: [
        { message: 'Hello how are you?', likeCount: 10, icon: iconPost, id: 1 },
        { message: 'Did you go', likeCount: 6, icon: iconPost, id: 2 },
        { message: 'Did you drink wine?', likeCount: 57, icon: iconPost, id: 3 }
    ],
    postInputText: ''
}


export const profileReducer = (state: postMessagesPropsType = initialState, action: ProfileActions): postMessagesPropsType => {

    switch (action.type) {
        case ADD_POST:
            return {...state, postMessages: [...state.postMessages, { message: action.value, id: state.postMessages.length + 1, likeCount: 4, icon: iconPost }] ,postInputText: ''}
        case CHANGE_TEXT:
            return {...state, postInputText: action.value}
        default:
            return state;
    }


}

