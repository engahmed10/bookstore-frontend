import React,{Component} from 'react'
import signUpUser from '../../actions/signupUserAction'
import {connect} from 'react-redux'



class SignUp extends Component {
   
    state={
           username: '', 
           email:'',
           bio:'',
           avatar:'',
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
        this.props.signUpUser(this.state)
     }


  render(){
     
   return <div  class='auth-container'>
 
       <form  id="signup-form-container" onSubmit={this.handleLoginSubmit} >
         <label>User Name: </label>
         <input type="text" 
          name="username" 
          value={this.state.username}
          placeholder="username"
          onChange={this.handleLoginChange} 
         /><br/>
         <label>Email: </label>
         <input type="text" 
          name="email" 
           placeholder="email"
          value={this.state.email}
          onChange={this.handleLoginChange} 
         /><br/>
          <label>Bio: </label>
        <textarea form ="testformid"  cols="35"
                name="bio" 
                placeholder="bio"
                value={this.state.bio}
                onChange={this.handleLoginChange} 
       >Bio: </textarea><br/>
          <label>Avatar: </label>
          <input type="text" 
            name="avatar" 
            placeholder="avatar"
            value={this.state.avatar}
            onChange={this.handleLoginChange} 
         />
         <br/>
         <label>Password: </label>
         <input  type="password"
          name="password" 
           placeholder="password"
          value={this.state.password}
          onChange={this.handleLoginChange} 
        /><br/>
         <input type="submit"  class="signup-form-btn"
         />

       </form>
  
      </div>
  }

}

const mapDispatchToProps=dispatch=>{
    return {signUpUser:(userinfo)=> dispatch(signUpUser(userinfo))}
}

export default connect(null,mapDispatchToProps)(SignUp)