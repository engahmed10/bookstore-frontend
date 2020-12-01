//import React, {Component}  from 'react'
import React,{Component} from 'react'
import { NavLink }  from 'react-router-dom'
import { connect } from 'react-redux'
//import "bootstrap/dist/css/bootstrap.min.css";

class NavBar   extends Component {
renderNav=()=>(
   
  this.props.loggedIn?
        <div  style={{'height':'25px','background-color':'#f7b300'
}}>
        <NavLink to="/Home" style={{'margin':'25px'}}
        >Home
        </NavLink>
        <NavLink  to="/About" style={{'margin':'25px'}}
          >About
        </NavLink>
        <NavLink  to="/Logout" style={{'margin':'25px'}}
         onClick={this.props.resetSession} 
        >Log Out 
        </NavLink>
        </div >
        :
        <div  style={{'background-color':'light'}}>
         <NavLink
           to="/login">
           Log In
          </NavLink>
           <NavLink
           to="/signup" >
           Sign Up
          </NavLink>
        </div>
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