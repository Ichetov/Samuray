import React from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import { AppRootreducer } from "../redux/redux-store";
import { actionPropsType } from "../redux/Store";
import { DataStateType, changeIsDoneAC, changeIsDoneType, setUsersAC } from "../redux/users-reducer";


function mapStateToProps(state: AppRootreducer) {
    return {
        users: state.users.users
    }
}

function mapDispatchToProps(dispatch: (action: any) => void) {
    return {
        changeIsDone(id: number, value: boolean) {
            dispatch(changeIsDoneAC(value, id))
        },
        setUsers(users: DataStateType[]) {
            dispatch(setUsersAC(users))
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)