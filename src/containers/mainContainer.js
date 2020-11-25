import React,{Component}  from 'react'
import {connect} from 'react-redux'
import Login from '../components/authentications/Login'

 class  MainContainer extends Component{



    render(){

        return <div>
                      <Login />
               </div>

    }

}


export default MainContainer 