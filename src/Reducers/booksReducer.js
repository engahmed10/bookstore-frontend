const booksReducer=(state={books:[],toggle: false},action)=>{

  switch(action.type)
  {
     case 'LOADING_BOOKS':
        return { ...state, books:[...state.books]}
      case 'GET_BOOKS':
         return { ...state, books: action.books} 

      default:
         return state       
  }

}

export default booksReducer