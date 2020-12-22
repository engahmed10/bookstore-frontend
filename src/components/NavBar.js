import React,{Component} from 'react'
import { NavLink }  from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar   extends Component {
  
renderNav=()=>(
   
  this.props.loggedIn?
        <div className="navbar-container" style={{'height':'25px'}} >
        <NavLink className="navbar-navlink" to="/Home" style={{'margin':'25px'}}
        >HOME
        </NavLink>
        <NavLink className="navbar-navlink"  to="/About" style={{'margin':'25px'}}
          >ABOUT
        </NavLink>
       
        <NavLink className="navbar-navlink"   to="/Logout" style={{'margin':'25px'}}
         onClick={this.props.resetSession} 
        >LOG OUT
        </NavLink>

        </div >
        :
        <div className="navbar-container" style={{'background-color':'light'}}>
         <NavLink className="navbar-navlink"   
           to="/login">
           LOG IN
          </NavLink>
           <NavLink className="navbar-navlink" 
           to="/signup" >
           SIGN UP
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
    return {loggedIn: state.user.loggedIn }
}
const mapDispatchToProps=(dispatch)=>{
    return { resetSession: ()=>dispatch({type:"LOG_OUT"})}
}


export default  connect(mapStateToProps,mapDispatchToProps)(NavBar)