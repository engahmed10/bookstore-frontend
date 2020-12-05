const fetchUrl='http://127.0.0.1:3000/api/v1/comments'

const addComment=(data)=>{

   console.log(`storge`,localStorage)
   return (dispatch) => {
    
    fetch(fetchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
         body:JSON.stringify({data,localStorage})
    })
    .then((response) => response.json())
    .then((comment) => dispatch({type:'ADD_COMMENT' ,  comment: comment  } ))
    .catch((error) => console.log(error))
    
     }

}




export default addComment;