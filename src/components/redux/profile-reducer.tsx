import { PostType } from "../profile/posts/post/Post";
import iconPost from './../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'



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
}

export type ProfileActions = ChangePostActionType | AddPostActionType


export const profileReducer = (state: postMessagesPropsType, action: ProfileActions) => {

    switch (action.type) {
        case ADD_POST:
            state = { ...state, postMessages: [...state.postMessages, { message: state.postInputText, id: state.postMessages.length + 1, likeCount: 4, icon: iconPost }] }
            state = { ...state, postInputText: '' }
            return state
        case CHANGE_TEXT:
            state = { ...state, postInputText: action.value }
            return state
        default:
            return state;
    }


}

