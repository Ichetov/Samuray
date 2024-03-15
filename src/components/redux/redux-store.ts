import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { sidebarReducer } from './sidebar-reducer';
import { usersReduser } from './users-reducer';
import { headerReducer } from './header-reducer';
import thunk from 'redux-thunk'

let reducers = combineReducers({
    profile: profileReducer, 
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReduser,
    header: headerReducer
})

type RootReducerType = typeof reducers
export type AppRootreducer = ReturnType<RootReducerType>

export let store = createStore(reducers, applyMiddleware(thunk))