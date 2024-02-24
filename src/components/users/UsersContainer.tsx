import React from "react";
import { Users, UsersType } from "./Users";
import { connect } from "react-redux";
import { AppRootreducer } from "../redux/redux-store";
import { DataStateType, changeIsDone, changeIsLoad, setCount, setCurrentPage, setUsers } from "../redux/users-reducer";
import axios from "axios";
import { Preloader } from "../../Preloader";


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
}

type MapDispatchToPropsType = {
    changeIsDone: (value: boolean, id: number) => void
    setUsers: (items: DataStateType[]) => void
    setCount: (count: number) => void
    setCurrentPage: (id: number) => void
    changeIsLoad: (value: boolean) => void
}

type OwnPropsType = {

}

type UsersClassContainerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;


class UsersClassContainer extends React.Component<UsersClassContainerType> {
    componentDidMount(): void {
        this.props.changeIsLoad(true)
        axios(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${this.props.currentPage}`,{
            withCredentials: true,
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCount(response.data.totalCount)
                this.props.changeIsLoad(false)

            })
    }

    componentDidUpdate(prevProps: UsersClassContainerType) {

        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.changeIsLoad(true)
            axios(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${this.props.currentPage}`,{
                withCredentials: true,
            })
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.changeIsLoad(false)
                })
        }
    }


    changeFollow = (id: number) => {
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + id, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '2ecd69fe-2a50-42a6-8b92-395794495cfe'
            }
        })
            .then(val => {
                if (val.data.resultCode === 0) {
                    this.props.changeIsDone(true, id)
                }
            })

    }

    changeUnFollow = (id: number) => {
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id, {
            withCredentials: true,
            headers: {
                'API-KEY': '2ecd69fe-2a50-42a6-8b92-395794495cfe'
            }
        })
            .then(val => {
                if (val.data.resultCode === 0) {
                    this.props.changeIsDone(false, id)
                }
            })

    }

    render() {

        return (
            <div>
                {this.props.isLoading ? <Preloader /> : <Users changeUnFollow={this.changeUnFollow} changeFollow={this.changeFollow} currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage} totalCount={this.props.totalCount} users={this.props.users} changeIsDone={this.props.changeIsDone} />}
            </div>
        )
    }
}


function mapStateToProps(state: AppRootreducer): MapStateToPropsType {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading

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

export let UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, { changeIsDone, setUsers, setCount, setCurrentPage, changeIsLoad })(UsersClassContainer)