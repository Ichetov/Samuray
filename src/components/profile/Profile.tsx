import styled from "styled-components"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { UserType, addPostAction, postMessagesPropsType, addUser, changeUserId, addUserTh } from "../redux/profile-reducer"
import React from "react"
import { storeType } from "../../App"
import StoreContext from "../../StoreContext"
import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"
import { useParams } from "react-router-dom"
import axios from "axios"
import { redirect, withRouter } from "../../helper/helper"
import { compose } from "redux"


type MapStateToPropsType = {
    profile: postMessagesPropsType
    user: UserType | null
    userId: number
}

type MapDispatchToPropsType = {
    addPostAction: (value: string) => void
    addUser: (user: UserType) => void
    changeUserId: (id: number) => void
    addUserTh: (params: number) => void
}
type OwnPropsType = {

}

type OwnPropsClassType = {
    params: any
}


type ProfilType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

// const ProfileFc = (props: ProfilType) => {

//     let params = useParams();
//     let num = params.id;

//     if (Object.keys(params).length === 0) {
//         num = '24630'
//     }

//     return <Profile {...props} params={num} />
// }


type ProfileClassType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsClassType

export class Profile extends React.Component<ProfileClassType> {


    componentDidMount(): void {
        this.props.addUserTh(this.props.params)
    }

    render() {
        return (
            <StyledProfile>
                <ProfileInfo user={this.props.user} />
                <MyPost profile={this.props.profile} addPost={this.props.addPostAction} />
            </StyledProfile >
        )

    }
}

const StyledProfile = styled.section`

`

type ProfileConteinerType = {
    store: storeType
}

type StateType = {
    textValue: string
}


let mapStateToProps = (state: AppRootreducer): MapStateToPropsType => {
    return {
        profile: state.profile,
        user: state.profile.user,
        userId: state.profile.userId
    }
}

// let mapDispatchToProps = (dispatch: (action: actionPropsType) => void) => {
//     return {
//         addPost(val: string) {
//             dispatch(addPostAction(val))
//         }
//     }
// }




export let ProfileConteiner = compose(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, {
        addPostAction,
        addUser, changeUserId, addUserTh
    }),
    redirect,
)(Profile)


// export let ProfileConteiner = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, {
//     addPostAction,
//     addUser, changeUserId, addUserTh
// })(WrapperComponent)



// export default compose(
//     connect(mapStateToProps, { addPostAction, addUser, changeUserId, addUserTh }),
//     redirect
// )(ProfileConteiner);
