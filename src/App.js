import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Link,NavLink } from "react-router-dom";
import  NavBar from './components/NavBar'
import React,{Component}  from 'react'
import Login from './components/authentications/Login'
import SignUp from './components/authentications/SignUpUser'
import { Redirect } from 'react-router';
import autoLoginUser  from './actions/autoLoginUser'
import BooksContainer  from './containers/booksContainer'
import Comments from './components/commentsComponent/comments'
import {connect} from 'react-redux'
import About from './components/About'

class App  extends Component{


  componentDidMount(){

    this.props.autologin()
  }

  render(){

    return (
    
    <Router>
      <div >
          <NavBar /><br/><br/>
            { this.props.state.userReducer.loggedIn?
                    <>
                    <Route exact path="/Home" render={routeProps =>
                    <BooksContainer {...routeProps} />
                    }/>
                    <Route exact  path="/books/:id/comments"  render={matchId => 
                     <Comments {...matchId} userinfo={this.props.state.userReducer.users} /> 
                     }/>

                     <Route exact path="/About" render={route => <About />} />
                    <Redirect from="/login" to="/Home" />
                    <Redirect from="/signup" to="/Home" />
                    </>
                    :
                  <> 
                    <Route exact  path="/login"  render={routerProps =>  
                    <Login {...routerProps}    /> }/>
                    <Route exact  path="/signup"  render={routerProps =>  
                    <SignUp {...routerProps}    /> }/>
                    <Redirect from="/logout" to="/login" />
                </>                         
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
    return { autologin: ()=> dispatch(autoLoginUser()) }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
