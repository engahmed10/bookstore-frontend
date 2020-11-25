//import React, {Component}  from 'react'
import React,{Component} from 'react'
import { NavLink }  from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar   extends Component {

  
render(){
  return (
          <>
          <NavLink
           to="/login">
           Log In
          </NavLink>
              <br/>
           <NavLink
           to="/logout"  onClick={this.props.resetSession}    >
           Log Out
          </NavLink>
          <br/>
          <NavLink
           to="/signup"    >
           Sign Up
          </NavLink>

           </>
          )
     }
}
const mapDispatchToProps=(dispatch)=>{
    return { resetSession: ()=>dispatch({type:"LOG_OUT"}) }
}


export default  connect(null,mapDispatchToProps)(NavBar)