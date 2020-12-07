import SearchBooks from '../actions/searchBooks'
import {connect} from 'react-redux'
import React,{Component}  from 'react'

class  Search extends Component{

    state={
        query:""
    }
 
 
   handleChange=(e)=>{
        this.setState({  [e.target.name]: e.target.value         
     });
     }


        handleSubmit=(e)=> {
        e.preventDefault()
           this.props.SearchBooks(this.state.query)
        }



  render(){
    return( 
      <form  onSubmit={ e => this.handleSubmit(e)} >
        <input  type="text"  name="query" onChange={(e)=>this.handleChange(e)}/>
        <input  type="submit" />
      </form >
      )
  }

}

const mapDispatchToProps=(dispatch)=>{

    return{ SearchBooks: (q)=> dispatch(SearchBooks(q))
        
    }
}

export default connect(null,mapDispatchToProps)(Search) 