import {loginUser}  from '../actions/loginUserAction'

const userReducer =( state={ users:{},loggedIn: false} ,action)=>{
  
  
  switch(action.type){
    case "LOGIN_USER":
   console.log(`reducer`,action)
       return {...state,
                 users: { ...action.users},
                 loggedIn:true

               }
    default: 
      return state 

  }


}

export default userReducer