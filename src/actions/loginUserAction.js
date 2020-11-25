 const loginUser =(data)=>{
    
    return (dispatch)=>{
              //dispatch(type:"LODING_USERS")
              fetch('http://127.0.0.1:3000/login',
              {
                  method:'POST',
                  headers:{
                      'Content-type':'application/json'
                  },
                  body: JSON.stringify(data)
                  }
              )
              .then(response=>response.json())
              .then(data=>{
                 
                 dispatch({type:'LOGIN_USER',user: data.user}) 
              })
              .catch((error)=>{
                  console.error('Error',error)
               }
              )
    }
}


export default loginUser

