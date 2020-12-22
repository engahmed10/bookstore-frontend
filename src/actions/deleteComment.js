

const deleteComment=({id,comment})=>{

  const fetchUrl=`http://127.0.0.1:3000/api/v1/comments/${id}`
    return (dispatch)=>{
        fetch(fetchUrl ,{
                method:'DELETE',
                headers:{
                'Content-Type':'application/json',
                },
                
                body:JSON.stringify(id)
        })
        .then(response => dispatch({type:'DEL_COMMENT',comment: comment}))

    }
  



}

export default deleteComment