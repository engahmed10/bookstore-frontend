import React,{Component} from 'react'
import loginUser from '../../actions/loginUserAction'
import {connect} from 'react-redux'


class Login extends Component {
   
    state={
           username: '', 
           password: '',
           loggedIn:false
   }


     handleLoginChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }

     handleLoginSubmit=(e)=>{
        e.preventDefault()
        this.props.loginUser(this.state)
     }


  render(){
     
   return <div>
       <form  onSubmit={this.handleLoginSubmit} >
         <label>User Name: </label>
         <input type="text" 
          name="username" 
          value={this.state.username}
          onChange={this.handleLoginChange} 
         />

         <br/>
         <label>Password: </label>
         <input  type="text"
          name="password" 
          value={this.state.password}
          onChange={this.handleLoginChange} 
        /><br/>
         <input type="submit" 
         />

       </form>
      </div>
  }

}

const mapDispatchToProps=dispatch=>{
    return {loginUser:(userinfo)=> dispatch(loginUser(userinfo))}
}

export default connect(null,mapDispatchToProps)(Login)