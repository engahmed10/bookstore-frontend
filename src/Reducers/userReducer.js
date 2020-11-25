const userReducer =( state={ users:{} },action)=>{
  switch(action.type){
    case "LOGIN_USER":
       return {...state,
                 users: action.user
               }
    default: 
       state 

  }


}