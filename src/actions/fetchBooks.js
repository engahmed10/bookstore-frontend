const fetchBooks =()=>{
  return(dispatch)=>{
  dispatch({type:'LOADING_BOOKS'})
  fetch('http://127.0.0.1:3000/api/v1/books')
  .then(response=>response.json())
  .then(books=>dispatch({type:"GET_BOOKS",books: books.data}))
  }
}


export default fetchBooks