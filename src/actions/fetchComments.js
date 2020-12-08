const fetchComments =()=>{
  return(dispatch)=>{
   
  fetch('http://127.0.0.1:3000/api/v1/comments').then(response=>
     response.json()
  )
  .then(comments=>  
   
       {if(comments.error){
               console.log('error')
        }else{
               dispatch({type:"GET_COMMENTS",comments: comments})
        }
        }
    )
  }
}


export default fetchComments