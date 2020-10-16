import React from "react"
import {connect} from "react-redux";
import {AllAppTypes} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type WithLoginRedirectPropsType = {

}

let mapStateToProps = (state: AllAppTypes)=> ({
    isLogin: state.auth.isLogin
})

export const withLoginRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any>{
        render() {
                if (!this.props.isLogin) return  <Redirect to='/login'/>
                return <Component {...this.props}/>
        }
    }
    return  connect(mapStateToProps, {})(RedirectComponent)
}


