import styled from "styled-components"

import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { addPostAction, postMessagesPropsType } from "../redux/profile-reducer"
import React from "react"
import { storeType } from "../../App"
import StoreContext from "../../StoreContext"
import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"
import { actionPropsType } from "../redux/Store"


type ProfilePropsType = {
    profile: postMessagesPropsType
    addPost: (value: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({ profile, addPost }) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost  profile={profile} addPost={addPost} />
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

type ProfileConteinerType = {
    store: storeType
}

type StateType = {
    textValue: string
}


// export class ProfileConteiner extends React.Component {

//     state: StateType = {
//         textValue: '',
//     }



//     render(): React.ReactNode {


//         const addPost = (val: string) => {
//             value.dispatch(addPostAction(val))
//         }


//         return (

//             <Profile setState={this.setState.bind(this)} value={this.state.textValue} addPost={addPost} profile={value.getState().profile} />

//         )
//     }


// }

let mapStateToProps = (state: AppRootreducer) => {
    return {
      profile: state.profile
    }
}

let mapDispatchToProps = (dispatch: (action: actionPropsType) => void) => {
    return {
      addPost(val: string){
        dispatch(addPostAction(val))
      }
    }
}


export let ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile)

