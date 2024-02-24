import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { combineReducers, createStore } from "redux";
import { sidebarReducer } from './sidebar-reducer';
import { usersReduser } from './users-reducer';
import { headerReducer } from './header-reducer';

let reducers = combineReducers({
    profile: profileReducer, 
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReduser,
    header: headerReducer
})

type RootReducerType = typeof reducers
export type AppRootreducer = ReturnType<RootReducerType>

export let store = createStore(reducers)