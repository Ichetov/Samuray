import React from "react";
import { Users, UsersType } from "./Users";
import { connect } from "react-redux";
import { AppRootreducer } from "../redux/redux-store";
import { DataStateType, changeFollTh, changeIsDone, changeIsLoad, changeUnFollowTh, getUsersThunk, setCount, setCurrentPage, setUsers, toggleFollowing } from "../redux/users-reducer";
import { Preloader } from "../../Preloader";
import { changeFoll, changeUnFoll, getUsers } from "../../api/api";


// type UsersClassContainerType = {
//     changeIsDone: (id: number, value: boolean) => void
//     users: DataStateType[]
//     setUsers: (items: DataStateType[]) => void
//     setCount: (count: number) => void
//     totalCount: number
//     setCurrentPage: (id: number) => void
//     currentPage: number
//     isLoading: boolean
//     changeIsLoad: (value: boolean) => void
// }

type MapStateToPropsType = {
    users: DataStateType[]
    totalCount: number
    currentPage: number
    isLoading: boolean
    disablArray: number[]
}

type MapDispatchToPropsType = {
    changeIsDone: (value: boolean, id: number) => void
    setUsers: (items: DataStateType[]) => void
    setCount: (count: number) => void
    setCurrentPage: (id: number) => void
    changeIsLoad: (value: boolean) => void
    toggleFollowing: (id: number, isFetch: boolean) => void
    getUsersThunk: (count: number) => void
    changeFollTh: (id: number)=> void
    changeUnFollowTh:(id: number)=> void
}

type OwnPropsType = {

}

type UsersClassContainerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;


class UsersClassContainer extends React.Component<UsersClassContainerType> {


    componentDidMount(): void {
        this.props.getUsersThunk(this.props.currentPage)
    }

    componentDidUpdate(prevProps: UsersClassContainerType) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsersThunk(this.props.currentPage)
        }
    }


    changeFollow = (id: number) => {
        this.props.changeFollTh(id)

    }

    changeUnFollow = (id: number) => {
        this.props.changeUnFollowTh(id)
    }

    render() {

        return (
            <div>
                {this.props.isLoading ? <Preloader /> : <Users disablArray={this.props.disablArray} changeUnFollow={this.changeUnFollow} changeFollow={this.changeFollow} currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage} totalCount={this.props.totalCount} users={this.props.users} changeIsDone={this.props.changeIsDone} />}
            </div>
        )
    }
}


function mapStateToProps(state: AppRootreducer): MapStateToPropsType {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading,
        disablArray: state.users.disablArray

    }
}


// function mapDispatchToProps(dispatch: (action: any) => void) {
//     return {
//         changeIsDone(id: number, value: boolean) {
//             dispatch(changeIsDoneAC(value, id))
//         },
//         setUsers(users: DataStateType[]) {
//             dispatch(setUsersAC(users))
//         },
//         setCount(count: number) {
//             dispatch(setCountAC(count))
//         },
//         setCurrentPage(id: number) {
//             dispatch(setCurrentPageAC(id))
//         },
//         changeIsLoad(value: boolean) {
//             dispatch(chanheIsLoading(value))
//         }
//     }
// }

export let UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, {
    changeIsDone, setUsers, setCount, setCurrentPage, changeIsLoad, toggleFollowing,
    getUsersThunk, changeFollTh,changeUnFollowTh
})(UsersClassContainer)