import React from "react";
import { Users, UsersType } from "./Users";
import { connect } from "react-redux";
import { AppRootreducer } from "../redux/redux-store";
import { actionPropsType } from "../redux/Store";
import { DataStateType, changeIsDoneAC, changeIsDoneType, chanheIsLoading, setCountAC, setCurrentPageAC, setUsersAC, } from "../redux/users-reducer";
import axios from "axios";
import { Preloader } from "../../Preloader";


type UsersClassContainerType = {
    changeIsDone: (id: number, value: boolean) => void
    users: DataStateType[]
    setUsers: (items: DataStateType[]) => void
    setCount: (count: number) => void
    totalCount: number
    setCurrentPage: (id: number) => void
    currentPage: number
    isLoading: boolean
    changeIsLoad: (value: boolean) => void
}



class UsersClassContainer extends React.Component<UsersClassContainerType> {
    componentDidMount(): void {
        this.props.changeIsLoad(true)
        axios(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCount(response.data.totalCount)
                this.props.changeIsLoad(false)

            })
    }

    componentDidUpdate(prevProps: UsersClassContainerType) {

        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.changeIsLoad(true)
            axios(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.changeIsLoad(false)
                })
        }
    }


    render() {
        return (
            <div>
                {this.props.isLoading ? <Preloader/> : <Users currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage} totalCount={this.props.totalCount} users={this.props.users} changeIsDone={this.props.changeIsDone} />}
            </div>
        )
    }
}


function mapStateToProps(state: AppRootreducer) {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading
    }
}




function mapDispatchToProps(dispatch: (action: any) => void) {
    return {
        changeIsDone(id: number, value: boolean) {
            dispatch(changeIsDoneAC(value, id))
        },
        setUsers(users: DataStateType[]) {
            dispatch(setUsersAC(users))
        },
        setCount(count: number) {
            dispatch(setCountAC(count))
        },
        setCurrentPage(id: number) {
            dispatch(setCurrentPageAC(id))
        },
        changeIsLoad(value: boolean) {
            dispatch(chanheIsLoading(value))
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)