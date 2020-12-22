import SortBooks from '../actions/sortBooks'
import {connect} from 'react-redux'
import React,{Component}  from 'react'
import fetchBooks from '../actions/fetchBooks'

class  Sort extends Component{

 
  componentDidMount(){
   
   // let books= this.props.fetchBooks()

    //console.log(`fetch books`,this.props)
     this.props.SortBooks(this.props.books)
  }


  render(){
    return( 
      <form  class="search-form" onSubmit={ e => this.handleSubmit(e)} >
        <input  type="text"  name="query" onChange={(e)=>this.handleChange(e)}/>
        <input  type="submit" />
      </form >

      )
  }

}



const mapDispatchToProps=(dispatch)=>{

    return{ fetchBooks:()=> dispatch(fetchBooks()),
        SortBooks: (books)=> dispatch(SortBooks(books))
            
        
    }
}
const  mapPropsToState=(state)=>{
     return{ books: state.booksReducer.books
       }
}


export default connect(mapPropsToState,mapDispatchToProps)(Sort) 