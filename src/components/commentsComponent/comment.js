 import React,{Component}  from 'react';


 class Comment extends Component{

  state={ 

       edithform: false,
       likedId:0,
       like:0
   }

handleChangelike=(e,id)=>{
  
  e.preventDefault();
 
  this.setState(function(previousState){
     return { 
              like: previousState.like+1,
              likedId: id
            }
    }
  )
  
  if(this.state.likedId != id){
     this.state.like=0; 
   }


}


   render(){
            const{comment,user}=this.props

      return (
          
            <div className="comment-container" >
                    <> <img src='/images.png' 
                    alt="Avatar" class="avatar" />
                    </>   
                     {user.attributes.username}<br/>
                    <> <span style={{"margin":"5em","border":"1px solid silver",
                       "paddingLeft": '20px'}}>   {comment.description}  </span> 
                 <button class ="btn" onClick={(e)=>{this.handleChangelike(e,comment.id)
                     }}>
                     like  </button>
                     { this.state.likedId == comment.id ?
                         <div style={{'margin-left':'14em'}} > {this.state.like }
                         </div>
                      :""
                     }
                                        
                    </>             
                </div>  
      )

   }

 }

export default Comment 
