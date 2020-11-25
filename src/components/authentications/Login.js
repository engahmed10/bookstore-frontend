import React,{Component} from 'react'
import loginUser from '../../actions/loginUserAction'
import {connect} from 'react-redux'



class Login extends Component {
   
    state={
       
           username: '', 
           password: '',

   }


     handleLoginChange=(e)=>{
        this.setState({
           [ e.target.user]:e.target.value
        })
     }

     handleLoginSubmit=(e)=>{
        e.preventDefault()
        this.props.loginUser(this.state)
     }


  render(){
     
   return <div>
       <form  onSubmit={this.handleLoginSubmit} >

         <input type="text" 
          name="user" 
          onChange={this.handleLoginChange} 
         />
         <br/>
         <input  type="text"
          name="user" 
          onChange={this.handleLoginChange} 
        /><br/>
         <input type="submit" 
         />

       </form>
      </div>
  }

}

const mapStateToProps =state=>{
  return   { userState: state.userReducer}
}

const mapDispatchToProps=dispatch=>{
    return {users:(userinfo)=> dispatch(loginUser(userinfo))}
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)