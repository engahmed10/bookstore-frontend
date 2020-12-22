
const userReducer =( state={ users:{},loggedIn: false} ,action)=>{
  
  
  switch(action.type){
    case "LOGIN_USER":
       
         
       return {...state,
                 users: { ...action.users},
                 loggedIn: true
               }

     case "SIGN_UP_USER":

       return {...state,
                 users: { ...action.users},
                 loggedIn: true
               }           

    case "LOG_OUT":
 
        return {
                 users: {},
                 loggedIn: false
                 }
    default: 
        return state 

  }


}

export default userReducer