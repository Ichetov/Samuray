import styled from "styled-components"
import icon from "./../../../../images/ec036f0f1cddedb4d0a7b1176c747982.jpeg"
import { UserType } from "../../../redux/profile-reducer"
import { Preloader } from "../../../../Preloader"
import icons from './../../../../images/222.jpg'
import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Status } from "./Status"


type ProfileInfoType = {
    user: UserType | null
    status: string
    changeStatusAC: (value: string) => void
}

export const ProfileInfo = ({ user, status, changeStatusAC }: ProfileInfoType) => {



    if (!user) {
        return <Preloader />
    }



    return (
        <div>
            <Img src={icon} />
            <div>
                <img style={{ width: '70px' }} src={user.photos.small || icons} alt="" />
            </div>
            <div>
                {user.fullName}
            </div>
            <div>
                {user.aboutMe}
            </div>
            <Status status = {status} changeStatusAC = {changeStatusAC}/>
        </div>

    )
}

const Img = styled.img`
 width: 100%;
`