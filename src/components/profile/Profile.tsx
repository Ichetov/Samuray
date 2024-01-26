import styled from "styled-components"

import { MyPost } from "./posts/MyPosts"
import { ProfileInfo } from "./posts/profileInfo/ProfileInfo"
import { addPostAction, postMessagesPropsType } from "../redux/profile-reducer"
import React from "react"
import { storeType } from "../../App"
import StoreContext from "../../StoreContext"


type ProfilePropsType = {
    profile: postMessagesPropsType
    addPost: (value: string) => void
    setState: (value: { textValue: string }) => void
    value: string
}

export const Profile: React.FC<ProfilePropsType> = ({ profile, addPost, value, setState }) => {
    return (
        <StyledProfile>
            <ProfileInfo />
            <MyPost setState={setState} value={value} profile={profile} addPost={addPost} />
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


export class ProfileConteiner extends React.Component {

    state: StateType = {
        textValue: '',
    }

    static contextType = StoreContext;

    render(): React.ReactNode {
        let value = this.context;

        const addPost = (val: string) => {
            value.dispatch(addPostAction(val))
        }


        return (
      
                    <Profile value={this.state.textValue} setState={this.setState.bind(this)} addPost={addPost} profile={value.getState().profile} />
          
        )
    }


}

