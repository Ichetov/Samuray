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

}

let initialState: initialStateType = {
   users: [],

}


export const usersReduser = (state: initialStateType = initialState, action: any) => {
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
      default:
         return state
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
   users:  DataStateType[]
}


export const setUsersAC = (users: DataStateType[]): setUsersType => {
   return {
      type: 'SET-USERS',
      users
   }
}