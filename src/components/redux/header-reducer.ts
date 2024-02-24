import { UserType } from "./profile-reducer";


const CHANGE_ISAUTH = 'CHANGE-ISAUTH';

const ADD_DATA = 'ADD-DATA';

const ADD_PROFILE = 'ADD-PROFILE';

export type DataType = {
    id: number
    email: string
    login: string
}


type initialStateType = {
    isAuth: boolean
    data: DataType | null
    profile: UserType | null
}


const initialState: initialStateType = {
    isAuth: false,
    data: null,
    profile: null
}



export const headerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_ISAUTH:
            return {
                ...state, isAuth: action.isVal
            }
        case ADD_DATA:
            return {
                ...state, data: action.data
            }
        case ADD_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}



type changeIsAuthType = {
    type: typeof CHANGE_ISAUTH
    isVal: boolean
}

export const changeIsAuth = (isVal: boolean): changeIsAuthType => {
    return {
        type: CHANGE_ISAUTH,
        isVal: isVal
    }
}



type addDataType = {
    type: typeof ADD_DATA
    data: DataType
}

export const addData = (data: DataType): addDataType => {
    return {
        type: ADD_DATA,
        data
    }
}



type AddDataType = {
    type: typeof ADD_PROFILE
    profile: UserType
}

export const addProfile = (profile: UserType): AddDataType => {
    return {
        type: ADD_PROFILE,
        profile
    }
}