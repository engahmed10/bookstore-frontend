import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/mainContainer'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import  NavBar from './components/NavBar'
import React,{Component}  from 'react'
import Login from './components/authentications/Login'
import SignUp from './components/authentications/SignUpUser'
import Home from './components/Home'
import { Redirect } from 'react-router';
import autoLoginUser  from './actions/autologinUser'

import {connect} from 'react-redux'


class App  extends Component{


  componentDidMount(){
    this.props.autologin()
  }

  render(){

    console.log(`prop`,this.props.state.userReducer)
    return (
    
    <Router>
      <div >
          <NavBar /><br/><br/>
            { this.props.state.userReducer.loggedIn?
                    <Home />:
              <Switch>     
                <Route exact  path="/login"  render={routerProps =>  
                <Login {...routerProps}    /> }/>
                 <Route exact  path="/signup"  render={routerProps =>  
                <SignUp {...routerProps}    /> }/>
                <Redirect from="/logout" to="/login" />
              </Switch>              
            }
        </div>
    </Router>
  );

  }

}


const mapStateToProps=(state)=>{
    return{state}
}

const mapDispatchToProps=dispatch=>{
    return {autologin:()=> dispatch(autoLoginUser()) }
}

export default connect(mapStateToProps)(App);
