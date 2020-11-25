import React,{Component} from 'react'
import signUpUser from '../../actions/signupUserAction'
import {connect} from 'react-redux'



class SignUp extends Component {
   
    state={
           username: '', 
           email:'',
           bio:'',
           image:'',
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
        console.log(`a`,this.state)
        this.props.signUpUser(this.state)
     }


  render(){
     
   return <div>
       <form  onSubmit={this.handleLoginSubmit} >

         <input type="text" 
          name="username" 
          value={this.state.username}
          placeholder="username"
          onChange={this.handleLoginChange} 
         />
         <input type="text" 
          name="email" 
           placeholder="email"
          value={this.state.email}
          onChange={this.handleLoginChange} 
         />
         <input type="text" 
          name="bio" 
           placeholder="bio"
          value={this.state.bio}
          onChange={this.handleLoginChange} 
         />
          <input type="text" 
          name="avatar" 
           placeholder="avatar"
          value={this.state.avatar}
          onChange={this.handleLoginChange} 
         />
         <br/>
         <input  type="text"
          name="password" 
           placeholder="password"
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
    return {signUpUser:(userinfo)=> dispatch(signUpUser(userinfo))}
}

export default connect(null,mapDispatchToProps)(SignUp)