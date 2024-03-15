import { changeFoll, changeUnFoll } from './../../api/api';
import { getUsers } from '../../api/api';
import ava from './../../images/x2097369-1271064885.png'


type PhotosType = {
   small: string | null
   large: string | null
}


const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';

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
   disablArray: number[]
}

let initialState: initialStateType = {
   users: [],
   totalCount: 0,
   currentPage: 1,
   isLoading: false,
   disablArray: []
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
      case TOGGLE_FOLLOWING:
         return {
            ...state, disablArray: action.isFetch ? [...state.disablArray, action.id] : state.disablArray.filter(it => it !== action.id)
         }
      // case DEL_DISABLE:
      //    return {
      //       ...state,  disablArray: state.disablArray.filter(it=> it!== action.val)
      //    }
      default:
         return state
   }
}


// type AddDisableType = {
//    type: typeof ADD_DISABLE
//    val: number
// }


// export const addDisable = (val: number): AddDisableType => {
//    return {
//       type: ADD_DISABLE,
//       val
//    }
// }




type ToggleFollowingType = {
   type: typeof TOGGLE_FOLLOWING
   id: number
   isFetch: boolean
}


export const toggleFollowing = (id: number, isFetch: boolean): ToggleFollowingType => {
   return {
      type: TOGGLE_FOLLOWING,
      id,
      isFetch
   }
}



type ChanheIsLoadingType = {
   type: 'CHANGE-ISLOAD'
   isValue: boolean
}


export const changeIsLoad = (isValue: boolean): ChanheIsLoadingType => {
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

export const changeIsDone = (value: boolean, id: number): changeIsDoneType => {
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



export const setUsers = (users: DataStateType[]): setUsersType => {
   return {
      type: 'SET-USERS',
      users
   }
}


export type setCountType = {
   type: 'SET-COUNT'
   count: number
}


export const setCount = (count: number): setCountType => {
   return {
      type: 'SET-COUNT',
      count
   }
}

export type setCurrentPageType = {
   type: 'SET-CURRENT'
   id: number
}


export const setCurrentPage = (id: number): setCurrentPageType => {
   return {
      type: 'SET-CURRENT',
      id
   }
}



export const getUsersThunk = (currentPage: number) => {
   return (dispatch: any) => {
      dispatch(changeIsLoad(true))
      getUsers(currentPage)
         .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setCount(data.totalCount))
            dispatch(changeIsLoad(false))

         })
   }
}


export const changeFollTh = (id: number) => {
   return (dispatch: any) => {
      dispatch(toggleFollowing(id, true))
      changeFoll(id)
         .then(val => {
            dispatch(toggleFollowing(id, false))
            if (val === 0) {
               dispatch(changeIsDone(true, id))
            }
         })
   }
}



export const changeUnFollowTh = (id: number) => {
   return (dispatch: any) => {
     dispatch(toggleFollowing(id, true))
      changeUnFoll(id)
         .then(val => {
            dispatch(toggleFollowing(id, false))
            if (val === 0) {
               dispatch(changeIsDone(false, id))
            }
         })
   }
}