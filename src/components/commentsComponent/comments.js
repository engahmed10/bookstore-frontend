 import React,{Component}  from 'react'
 import {connect}  from 'react-redux'
 import addComment from '../../actions/addComment'
 import fetchComments  from '../../actions/fetchComments'
 import deleteComment from '../../actions/deleteComment'
 import updateComment from '../../actions/updateComment'
 import fetchUsers  from   '../../actions/fetchUsers'

 class Comments extends Component{
  
   state={
       comment: {description:"",booke_id:""},
       updateId:"",
       edithform: false
   }


    componentDidMount(){

         this.props.fetchUsers()
         this.props.fetchComments()
       
    }


   handleChange=(e,book_id)=>{
 
       this.setState(
           { 
             comment:{[e.target.name] : e.target.value ,
             book_id: book_id},
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

  handleDelete=(id,comment)=>{
    this.props.deleteComment({id,comment})

  }


handleEdith=(id)=>{
  
     this.setState({
           updateId:id,
           edithform:true

     })
}

  handleUpdate=(e)=>{

     e.preventDefault();
    const data={
        comment:{
        description: this.state.comment.description,
        id:this.state.updateId}
     }

     this.props.updateComment(data)

         this.setState({
          
           edithform:false

     })
     
  }



renderComment=(book_id)=>{

  if (this.props.comments && this.props.comments.length ){
      
    
    let commentsByBook=this.props.comments.filter(comment => comment.book_id == book_id)
  
    return <>                                
        <>    
        {
         commentsByBook.map(comment => {    
           let  user = this.props.users.find(user=> user.id == comment.user_id)
          
           return <div className="comment-container" >
                    <> <img src='/images.png' 
                    alt="Avatar" class="avatar" />
                    </>   
                     {user.attributes.username}<br/>
                    <> <span style={{"margin":"5em","border":"1px solid silver",
                       "paddingLeft": '20px'}}>   {comment.description}  </span> 
                    { user.id == this.props.userinfo.id ?
                    <>
                        <button  className="btn-command-del" onClick={(e)=>this.handleDelete(comment.id,comment)} > delete</button>
                        <button  className="btn-command-update" onClick={(e)=>this.handleEdith(comment.id)} > Update</button> 
                    </>:''
                    }
                    </>             
                </div>                           
          })

          }                  
        </>   
    </>          
 } }
             
    
 render(){
     const book_id= this.props.match.params.id
    return( 

        <div> 
        { this.state.edithform ?
              <form className="commentForm" >
                    <h5>Update Comment</h5>
                    <input type="textarea"  name="description" onChange={(e)=>this.handleChange(e)}  className="commentFormInput"/>
                    < button className="commentButton"  onClick={(e)=>this.handleUpdate(e)} > update comment</button>
               </form>

        :    
                <form className="commentForm" onSubmit={(e)=>this.handleSubmit(e,book_id)} >
                            <h5>Replay With Comment</h5>
                            <input type="textarea"  name="description" onChange={(e)=>this.handleChange(e,book_id)} className="commentFormInput"/>
                            <input type="submit"  className="commentButton" />
                </form>
         
         }
           {this.renderComment(book_id)}
        </div>          
    )
  }
  
}

const mapStateToProps=(state)=>{
    return {
         comments: state.comments.comments,
         users: state.comments.users
    }
}


const mapDispatchToProps=(dispatch)=> {
    return  {
               fetchComments:()=> dispatch(fetchComments()), 
               updateComment:(data)=>dispatch(updateComment(data)),
               addComment: (data)=> dispatch(addComment(data)) ,
               deleteComment: ({id,comment})=> dispatch(deleteComment({id,comment})),
               resetAddBooks:(type)=>dispatch(type),
               fetchUsers:()=> dispatch(fetchUsers())
            } ;
}


export default connect(mapStateToProps,mapDispatchToProps)(Comments)
 