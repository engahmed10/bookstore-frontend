import {loginUser}  from '../actions/loginUserAction'

const userReducer =( state={ users:{},loggedIn: false} ,action)=>{
  
  
  switch(action.type){
    case "LOGIN_USER":
       console.log(`reducer`,action)
       return {...state,
                 users: { ...action.users},
                 loggedIn:true

               }

     case "SIGN_UP_USER":
       console.log(`reducer`,action)
       return {...state,
                 users: { ...action.users},
                 loggedIn:true
               }           

    case "LOG_OUT":
      console.log('iam here')
         return {
                 users: {},
                 loggedIn: false
                 }
    default: 
      return state 

  }


}

export default userReducer