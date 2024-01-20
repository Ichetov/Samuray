import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { combineReducers, createStore } from "redux";
import { sidebarReducer } from './sidebar-reducer';

let reducers = combineReducers({
    profile: profileReducer, 
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

type RootReducerType = typeof reducers
export type AppRootreducer = ReturnType<RootReducerType>

export let store = createStore(reducers)