import styled from "styled-components"
import icon from "./../../../../images/ec036f0f1cddedb4d0a7b1176c747982.jpeg"
import { UserType } from "../../../redux/profile-reducer"
import { Preloader } from "../../../../Preloader"
import icons from './../../../../images/222.jpg'


type ProfileInfoType = {
    user: UserType | null
}

export const ProfileInfo = ({ user }: ProfileInfoType) => {

    if (!user) {
        return <Preloader />
    }
    return (
        <div>
            <Img src={icon} />
            <div>
             <img style = {{width: '70px'}} src={user.photos.small || icons} alt="" />
            </div>
            <div>
                {user.fullName}
            </div>
            <div>
                {user.aboutMe}
            </div>
        </div>

    )
}

const Img = styled.img`
 width: 100%;
`