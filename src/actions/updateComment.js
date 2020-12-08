const updateComment=(data)=>{
   console.log(`why`,data)
  return (dispatch)=>{
    fetch(`http://127.0.0.1:3000/api/v1/comments/${data.id}`,{

        method:"PATCH",

        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify({data})

    })
    .then(response=>response.json())
    .then(comment=>
          dispatch({type:"UPDATE_COMMENT",comment:comment}))
  }


}

export default updateComment