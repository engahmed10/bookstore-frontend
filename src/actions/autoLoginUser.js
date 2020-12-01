 const autoLoginUser =(data)=>{

    return (dispatch)=>{
              fetch('http://127.0.0.1:3000/api/v1/autologin',
              {
                
                  headers:{
                      'Content-type':'application/json',
                      'Autorization':`Bearer ${localStorage.getItem("token")}`
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
                 dispatch({type:"LOGIN_USER",users: data}) 
                  }
  
              })
              .catch((error)=>{
                  console.error('Error',error)
               }
              )
    }
}


export default autoLoginUser