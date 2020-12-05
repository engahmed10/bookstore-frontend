import React,{Component}  from 'react'
import Home from '../components/booksComponent/Home'

import { Route } from 'react-router-dom'
 import { Switch} from "react-router-dom"
 

 class  BooksContainer extends Component{

    render(){

        return ( 
               
            <div>
                <Home />
               
            </div>

        )        
    }

}


export default BooksContainer 