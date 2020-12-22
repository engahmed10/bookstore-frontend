
const userReducer =( state={ user:{},loggedIn: false} ,action)=>{
  
  
  switch(action.type){
    case "LOGIN_USER":
       
         
       return {...state,
                 user: { ...action.user},
                 loggedIn: true
               }

     case "SIGN_UP_USER":

       return {...state,
                 user: { ...action.user},
                 loggedIn: true
               }           

    case "LOG_OUT":
 
        return {
                 user: {},
                 loggedIn: false
                 }
    default: 
        return state 

  }


}

export default userReducer