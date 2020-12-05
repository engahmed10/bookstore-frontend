
const initialState={ comments:[],books:[] }
const commentsReducer=(  state=initialState,action ) =>{
   switch(action.type){

       case 'ADD_COMMENT':
              
         return Object.assign({}, state, {
              comments: state.comments.concat(action.comment)
            })
           
        case 'GET_BOOKS':
       
         return { ...state, books: action.books} 

        case  "RESET_STATE":

          return initialState;

        default:
           return  state
   }


}



export default commentsReducer
