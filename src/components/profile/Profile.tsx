import styled from "styled-components"

import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { PostType } from "./posts/post/Post"
import { actionPropsType,  storePropsType } from "../redux/Store"
import { addPostAction, postMessagesPropsType } from "../redux/profile-reducer"
import React from "react"
import { storeType } from "../../App"


type ProfilePropsType = {
    profile: postMessagesPropsType
    addPost: (value: string) => void
    setState: (value: {textValue: string}) => void
    value: string
}

export const Profile: React.FC<ProfilePropsType> = ({ profile, addPost, value,  setState }) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost  setState = { setState} value = {value} profile={profile} addPost={addPost} />
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

type ProfileConteinerType = {
    // profile: postMessagesPropsType
    // dispatch: (action: actionPropsType) => void
    store: storeType
}

type StateType = {
    textValue: string
}


export class ProfileConteiner extends React.Component<ProfileConteinerType> {

    state: StateType = {
        textValue: '',
    }


    render(): React.ReactNode {

        const addPost = (val: string) => {
            this.props.store.dispatch(addPostAction(val))
        }


        return (
            <div>
                <Profile value = {this.state.textValue} setState={this.setState.bind(this)} addPost={addPost} profile={this.props.store.getState().profile} />
            </div>
        )
    }


}

