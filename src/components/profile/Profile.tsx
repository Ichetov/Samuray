import styled from "styled-components"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { UserType, addPostAction, postMessagesPropsType, addUser } from "../redux/profile-reducer"
import React from "react"
import { storeType } from "../../App"
import StoreContext from "../../StoreContext"
import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"
import { useParams } from "react-router-dom"
import axios from "axios"


type MapStateToPropsType = {
    profile: postMessagesPropsType
    user: UserType | null
}

type MapDispatchToPropsType = {
    addPostAction: (value: string) => void
    addUser: (user: UserType)=> void
}
type OwnPropsType = {

}

type OwnPropsClassType = {
    params: any
}


type ProfilType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const ProfileFc = (props: ProfilType) => {

    let params = useParams();
    let num = params.id;
    
    if(Object.keys(params).length === 0){
        num  = '24630'
    }

    return <Profile {...props} params={num} />
}


type ProfileClassType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsClassType

export class Profile extends React.Component<ProfileClassType> {


    componentDidMount(): void {
     axios('https://social-network.samuraijs.com/api/1.0/profile/'+this.props.params)
     .then((val)=> {
        this.props.addUser(val.data)
     })
    }

    render() {
        return (
            <StyledProfile>
                <ProfileInfo user = {this.props.user} />
                <MyPost  profile={this.props.profile} addPost={this.props.addPostAction} />
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
        user: state.profile.user
    }
}

// let mapDispatchToProps = (dispatch: (action: actionPropsType) => void) => {
//     return {
//         addPost(val: string) {
//             dispatch(addPostAction(val))
//         }
//     }
// }


export let ProfileConteiner = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, { addPostAction, addUser })(ProfileFc)

