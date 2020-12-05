 import { Link } from 'react-router-dom' 
 import { Route }  from 'react-router-dom'
 import React,{Component}  from 'react'
 import {connect}  from 'react-redux'
 import addComment from '../../actions/addComment'
 import  fetchBooks  from '../../actions/fetchBooks'

 class Comments extends Component{
  
   state={

       comment:{description:"",user_id:""}
   }

   handleChange=(e,book_id)=>{

       this.setState(
           { 
             comment:{[e.target.name] : e.target.value ,
             book_id: book_id}
           }
       )
     
   }

   handleSubmit=(e)=>{
     e.preventDefault()
      this.props.addComment(this.state)
   }


 componentWillUnmount() {
        this.props.resetAddBooks({type:"RESET_STATE"})
  }


    renderComment=()=>{


        if(this.props.match) {
            
             const book_id= this.props.match.params.id
             let commentsByBook=this.props.comments.filter(comment => comment.book_id == book_id)
             const  books= this.props.books.books.find(book => book_id == book.id)   

            return <>                   
                        <form className="commentForm" onSubmit={(e)=>this.handleSubmit(e)} >
                            <h5>Replay With Comment</h5>
                            <input type="textarea"  name="description" onChange={(e)=>this.handleChange(e,book_id)}  className="commentFormInput"/>
                            <input type="submit"  className="commentButton" />
                        </form>
                        <>
                            { books.comments.map(comment =>{
                                return <div>{comment.description}</div>
                            })
                                    
                            }
                             
                          {commentsByBook.map(comm => {
                              
                              return <div>{comm.description}</div>
                                 
                           })

                           }

                    
                          
                         </>   
                   </>          
     
        }      
    }
             
    
 render(){

    return( 
        <div>
            {  this.renderComment() }
        </div>          
    )
  }

}

const mapStateToProps=(state)=>{
    return {
         comments: state.commentsReducer.comments,
         books: state.commentsReducer ,         
    }
}


function mapDispatchToProps(dispatch) {
    return  { addComment: (data)=> dispatch(addComment(data)) ,
              //fetchBooks:()=> dispatch(fetchBooks()),
              resetAddBooks:(type)=>dispatch(type)
            } ;
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)
 