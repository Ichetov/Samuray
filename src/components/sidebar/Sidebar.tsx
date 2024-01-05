import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../Container"


export const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledList>
                <li><NavLink className={({ isActive, isPending }) =>
                    isActive ? "active" : ""}
                    to='/profile' >Profile</NavLink></li>
                <li><NavLink to='dialogs'>Messages</NavLink></li>
                <li><a >News</a></li>
                <li><a >Music</a></li>
                <li><a ></a></li>
            </StyledList>
        </StyledSidebar>
    )
}

const StyledSidebar = styled.nav`
grid-item: sidebar;
background-color: orange;
`

const StyledList = styled.ul`
 & > li{
    list-style: none; 
 }
 & > li + li{
    margin-top: 10px;
 }
 & > li > a{
    text-decoration: none;
    color: white;
 }
 & > li > a.active{
    color: yellow;
 }
`

