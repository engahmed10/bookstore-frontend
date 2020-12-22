const initialState={ books:[],sortedBooks:[] ,searchbooks:[]}
const booksReducer=(state=initialState,action)=>{

  switch(action.type)
  {
    // case 'LOADING_BOOKS':

      //  return { ...state, books:[...state.books]}

      case 'GET_BOOKS':
      console.log(`kk`,action)

         return { ...state, books:[ ...state.books,{books:action.books}]} 

      case  'SEARCH_BOOK':
         return { ...state, searchbooks: action.searchbooks} 

      case  "RESET_STATE":
          return initialState;

      case "SORT_BOOKS":
          return{ ...state, sortedBooks:[...state.sortedBooks, {sortedBooks:action.sortedBooks}]}


      default:
         return state       
  }

}

export default booksReducer