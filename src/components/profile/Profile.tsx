import styled from "styled-components"
import icon from "./../../images/ec036f0f1cddedb4d0a7b1176c747982.jpeg"
import { Container } from "../Container"
import { MyPost } from "./posts/MyPosts"


export const Profile = () => {
    return (
        <StyledProfile>
            <Img src={icon} />
            <MyPost />
        </StyledProfile>
    )
}

const StyledProfile = styled.section`

`

const Img = styled.img`
 width: 100%;
`