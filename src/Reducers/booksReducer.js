const initialState={ books:[] ,searchbooks:[],/*loading:false*/}
const booksReducer=(state=initialState,action)=>{

  switch(action.type)
  {
   
     // case  'LOADING_BOOKS':  //not needed 
      //   return {..state,loading:true} 

      case 'GET_BOOKS':
           
          return {...state,books:action.books}

      case  'SEARCH_BOOK':

          return {...state,searchbooks:action.searchbooks}
      
      case  "RESET_STATE":
          return initialState;

   
      default:
         return state       
  }

}

export default booksReducer