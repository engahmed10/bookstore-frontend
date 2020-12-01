//import React, {Component}  from 'react'
import React,{Component} from 'react'
import { NavLink }  from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar   extends Component {
renderNav=()=>(
   
  this.props.loggedIn?
        <>
        <NavLink to="/Home"
        >Home
        </NavLink>
        <NavLink  to="/About"
          >About
        </NavLink>
        <NavLink  to="/Logout"  onClick={this.props.resetSession} 
        >Log Out 
        </NavLink>
        </>
        :
        <>
         <NavLink
           to="/login">
           Log In
          </NavLink>
           <NavLink
           to="/signup" >
           Sign Up
          </NavLink>
        </>
)
  
render(){
  return (
            this.renderNav()
          )
     }
}

const mapStateToProps=(state)=>{
    return {loggedIn: state.userReducer.loggedIn }
}
const mapDispatchToProps=(dispatch)=>{
    return { resetSession: ()=>dispatch({type:"LOG_OUT"}) }
}


export default  connect(mapStateToProps,mapDispatchToProps)(NavBar)