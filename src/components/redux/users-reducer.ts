import ava from './../../images/x2097369-1271064885.png'



type PhotosType = {
   small: string | null
   large: string | null
}

export type DataStateType = {
   name: string
   status: string
   id: number
   photos: PhotosType
   followed: boolean
}


export type initialStateType = {
   users: DataStateType[]
   totalCount: number
   currentPage: number
   isLoading: boolean
}

let initialState: initialStateType = {
   users: [],
   totalCount: 0,
   currentPage: 1,
   isLoading: false,
}


export const usersReduser = (state: initialStateType = initialState, action: any): initialStateType => {
   switch (action.type) {
      case 'CHANGE-ISDONE':
         return {
            ...state, users: state.users.map(it => {
               if (it.id === action.id) return { ...it, followed: action.value }
               return it
            })
         }
      case 'SET-USERS':
         return {
            ...state, users: action.users
         }
      case 'SET-COUNT':
         return {
            ...state, totalCount: action.count
         }
      case "SET-CURRENT":
         return {
            ...state, currentPage: action.id
         }
      case 'CHANGE-ISLOAD':
         return {
            ...state, isLoading: action.isValue
         }
      default:
         return state
   }
}


type ChanheIsLoadingType = {
   type: 'CHANGE-ISLOAD'
   isValue: boolean
}


export const chanheIsLoading = (isValue: boolean): ChanheIsLoadingType => {
   return {
      type: 'CHANGE-ISLOAD',
      isValue
   }
}


export type changeIsDoneType = {
   type: 'CHANGE-ISDONE'
   value: boolean
   id: number
}

export const changeIsDoneAC = (value: boolean, id: number): changeIsDoneType => {
   return {
      type: 'CHANGE-ISDONE',
      value,
      id
   }
}

type setUsersType = {
   type: 'SET-USERS',
   users: DataStateType[]
}



export const setUsersAC = (users: DataStateType[]): setUsersType => {
   return {
      type: 'SET-USERS',
      users
   }
}


export type setCountType = {
   type: 'SET-COUNT'
   count: number
}


export const setCountAC = (count: number): setCountType => {
   return {
      type: 'SET-COUNT',
      count
   }
}

export type setCurrentPageType = {
   type: 'SET-CURRENT'
   id: number
}


export const setCurrentPageAC = (id: number): setCurrentPageType => {
   return {
      type: 'SET-CURRENT',
      id
   }
}

