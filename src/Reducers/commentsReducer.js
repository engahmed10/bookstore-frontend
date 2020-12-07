
const initialState={ comments:[],books:[],loading: false }
const commentsReducer=(  state=initialState,action ) =>{
  
   switch(action.type){

     case 'LOADING_BOOKS':
        return { ...state, books:[...state.books],comments:[...state.comments]}

       case 'ADD_COMMENT':
              
         return Object.assign({}, state, {
              comments: state.comments.concat(action.comment)
            })
           
        case 'GET_BOOKS':
           return { ...state, books: action.books,loading: true} 

        case  "RESET_STATE":
           return initialState;

        default:
           return  state
   }


}


export default commentsReducer
