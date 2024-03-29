import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../Container"
import StoreContext from "../../StoreContext"
import { storeType } from "../../App"


// type MessagesSidebarPropsType = {
//     sidebarData: Array<sidebarObjPropsType>
// }

export const Sidebar: React.FC = () => {

    return <StoreContext.Consumer>{
        (value: storeType | undefined) => {
            let frends = value?.getState().sidebar.sidebarData.map(item => {
                return <div key={item.id}><Img src={item.photo} alt="" /><div>{item.name}</div></div>
            })
            return <StyledSidebar>
                <StyledList>
                    <li><NavLink className={({ isActive, isPending }) =>
                        isActive ? "active" : ""}
                        to='/profile' >Profile</NavLink></li>
                    <li><NavLink to='dialogs'>Messages</NavLink></li>
                    <li><NavLink to='users'>Users</NavLink></li>
                    <li><a >News</a></li>
                    <li><a >Music</a></li>
                    <div >
                        <h2>Frends</h2>
                        <WrapperFrends >
                            {frends}
                        </WrapperFrends>
                    </div>

                </StyledList>
            </StyledSidebar>
        }
    }</StoreContext.Consumer>
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

const Img = styled.img`
width: 40px;
border-radius: 50%;
`
const WrapperFrends = styled.div`
display: flex;
div{
    margin-right: 5px;
}
`
