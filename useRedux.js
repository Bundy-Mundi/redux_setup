import React from 'react';
import { connect } from "react-redux";
import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from "../_redux/_actions/_mobileMenuActions";
import { LOGIN, LOGOUT } from "../_redux/_actions/_userActions";

const UseRedux = ({ children, ...rest }) => {
  return(
    <>
      { 
        React.Children.map(children, child => {
          const props = {...rest}
          if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
          }
          return child;
        })
      }
    </>
  )
};

const mapStateToProps = (state/*, ownProps*/) => {
  // const { style, mobileMenu, user } = state;
  return { ...state }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    dispatch:{
      open:() => dispatch({type: OPEN_MOBILE_MENU.type}),
      close:() => dispatch({type: CLOSE_MOBILE_MENU.type}),
      login:(user) => dispatch({type: LOGIN.type, payload:{ user }}),
      logout:() => dispatch({type: LOGOUT.type})
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UseRedux)