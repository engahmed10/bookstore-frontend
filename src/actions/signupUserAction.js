 const signUpUser =(data)=>{

    return (dispatch)=>{
              fetch('http://127.0.0.1:3000/api/v1/users',
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

                  if(data.error){
                   console.log('error')
                  }else{
                      localStorage.setItem('token',data.token)
                   dispatch({type:"SIGN_UP_USER",users: data}) 
                  }
  
              })
              .catch((error)=>{
                  console.error('Error',error)
               }
              )
    }
}


export default signUpUser

