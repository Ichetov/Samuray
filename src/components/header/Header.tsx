import styled from "styled-components"
import icon from './../../images/TREgxKjt5pk.jpg'
import { Container } from "../Container"
import React from "react"
import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"
import { DataType, addData, addProfile, authMe, changeIsAuth } from "../redux/header-reducer"
import { Auth } from "./Auth"
import axios from "axios"
import { UserType } from "../redux/profile-reducer"
import { Link } from "react-router-dom"



type MapStateToPropsType = {
    isAuth: boolean
    data: DataType
    photo: string | null
}

type MapDispatchToPropsType = {
    changeIsAuth: (val: boolean) => void
    addData: (data: DataType) => void
    addProfile: (val: UserType)=> void
    authMe: ()=> void
}

type OwnPropsType = {

}

type HeaderConteinerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class HeaderConteiner extends React.Component<HeaderConteinerType> {


    componentDidMount(): void {
        this.props.authMe()
    }

    render(): React.ReactNode {
        return (
            <Header photo={this.props.photo} data={this.props.data} isAuth={this.props.isAuth} />
        )
    }

}


type HeaderType = {
    isAuth: boolean
    data: DataType
    photo: string | null
}



const Header = ({ isAuth, data, photo }: HeaderType) => {
    return (
        <StyledHeader>

            <Wrapper>
                <Img src={icon} />
            </Wrapper>
            {isAuth ? <Auth photo={photo} data={data} /> : <Link to = '/login'>Login</Link>}
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
 background-color: green;
 padding: 10px 5px;
 grid-area: header;
 display: flex;
 justify-content: space-between;
`

const Img = styled.img`
 width: 50px;
 
`

const Wrapper = styled.div`
display: flex;
 
`

type mapStateToPropsType = {
    isAuth: boolean
    data: DataType
    photo: string | null
}

const mapStateToProps = (state: AppRootreducer): mapStateToPropsType => {
    return {
        isAuth: state.header.isAuth,
        data: state.header.data,
        photo: state.header.profile?.photos.small
    }
}



export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppRootreducer>(mapStateToProps, { changeIsAuth, addData, 
    addProfile, authMe})(HeaderConteiner)