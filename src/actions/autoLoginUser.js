 const autoLoginUser =()=>{
        const token= localStorage.getItem("token")

    return (dispatch)=>{

      
      if (token != 'undefined'){

              fetch('http://127.0.0.1:3000/api/v1/autologin',
              {
                method:'GET',
                  headers:{
                       'Content-Type': 'application/json',
                       'Accept': 'application/json',
                       'Autorization':`Bearer ${token}`
                  },
                  }
              )
              .then(response=>response.json())
              .then(data=>{

                  if(data.error){
                   console.log('error')
                  }else{
                  localStorage.setItem('token',data.token)
                 dispatch({type:"LOGIN_USER",user: data.user}) 
                  }
  
              })
              .catch((error)=>{
                  console.error('Error',error)
               }
              )
        }
    }
}


export default autoLoginUser