import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/mainContainer'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import  NavBar from './components/NavBar'
import React,{Component}  from 'react'
import Login from './components/authentications/Login'
import Home from './components/Home'

import {connect} from 'react-redux'


class App  extends Component{

  render(){

    console.log(`prop`,this.props.state.userReducer)
    return (
    
    <Router>
        <div >
                <NavBar />

                  <div>
                    { this.props.state.userReducer.loggedIn?
                           <Home />:
                           
                     <Route exact  path="/login"  render={routerProps =>  
                    <Login {...routerProps}    /> }/>
                        
                         }
                              

                  </div>
        </div>
    </Router>
  );

  }

}

 //<Redirect to="/" /> 

const mapStateToProps=(state)=>{
    return{state}
}

export default connect(mapStateToProps)(App);
