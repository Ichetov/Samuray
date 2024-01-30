import React from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import { AppRootreducer } from "../redux/redux-store";
import { actionPropsType } from "../redux/Store";







function mapStateToProps(state: AppRootreducer){
    return {

    }
}


function mapDispatchToProps(dispatch: (action: actionPropsType)=> void){
    return {
        
    }
}




export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)