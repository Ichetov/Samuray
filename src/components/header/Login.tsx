import { connect } from "react-redux"
import { AppRootreducer } from "../redux/redux-store"
import { Navigate } from "react-router-dom"

type mapStateToPropsType = {
    isAuth: boolean
}

type otherType = {

}

type LoginType = mapStateToPropsType & otherType;

export const Login = ({isAuth}: LoginType) => {
   
    if(isAuth) return <Navigate to = '/profile'/>
    return (
        <div>
            Login1
        </div>
    )
}




const mapStateToProps = (state: AppRootreducer): mapStateToPropsType => {
  return {
    isAuth: state.header.isAuth
  }
}


export let ComponentLogin = connect(mapStateToProps)(Login);