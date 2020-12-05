 const autoLoginUser =()=>{
console.log(`datata`)
const token= localStorage.getItem("token")
 console.log(`storrs`,localStorage)
 console.log(`this`,token)
    return (dispatch)=>{
      
     
      if (token){
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
                  
                 dispatch({type:"LOGIN_USER",users: data}) 
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