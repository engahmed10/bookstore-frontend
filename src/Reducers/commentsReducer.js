const initialState={ comments:[],books:[],users:[],loading: false }
const commentsReducer=(  state=initialState,action ) =>{
  
   switch(action.type){

         case 'ADD_COMMENT':
              
         return Object.assign({}, state, {
              comments: state.comments.concat(action.comment)
            })

         case 'GET_COMMENTS':
           return { ...state, comments: action.comments,loading: true} 

         case 'DEL_COMMENT':
            state.comments.splice(state.comments.indexOf(action.comment),1)
            
             return {...state,comments:[...state.comments] }

         case 'UPDATE_COMMENT':
             const comments = state.comments.filter(comment =>  comment.id !== action.comment.id)
             return {...state,comments: comments.concat(action.comment)}

        case 'GET_USERS':
          console.log(`GET_USERS`,action.users)

                 return { ...state, users: action.users }

         default:
           return  state
   }


}


export default commentsReducer
