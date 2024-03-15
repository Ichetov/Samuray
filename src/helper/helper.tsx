import { Navigate, useParams } from "react-router-dom";
import { AppRootreducer } from "../components/redux/redux-store";
import { connect } from "react-redux";

type MapStateToPropsTypeRedirect = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppRootreducer): MapStateToPropsTypeRedirect => {
    return {
        isAuth: state.header.isAuth
    }
}

export const redirect = (Component: any) => {

    function WrapperCom(props: any) {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }
    let ConnectRedirect = connect(mapStateToPropsRedirect)(WrapperCom)
    return ConnectRedirect;
}


export const withRouter = (Component: any) => {

    return (props: any) => {
        let params = useParams();
        let num = params.id;

        if (Object.keys(params).length === 0) {
            num = '24630'
        }

        return <Component {...props} params={num} />
    }
}