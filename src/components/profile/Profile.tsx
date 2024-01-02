import styled from "styled-components"
import icon from "./../../images/ec036f0f1cddedb4d0a7b1176c747982.jpeg"
import { Container } from "../Container"


export const Profile = () => {
    return (
        <StyledProfile>
        
  
            <Img src = {icon}/>    
     
            
        </StyledProfile>
    )
}

const StyledProfile = styled.section`
grid-area: content;
`

const Img = styled.img`
 width: 100%;
`