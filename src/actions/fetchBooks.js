const fetchBooks =()=>{
  return(dispatch)=>{
   
    // dispatch({type:'LOADING_BOOKS'})  // no needed 
console.log('c')
  fetch('http://127.0.0.1:3000/api/v1/books').then(response=>
     response.json()
  )
  .then(books=>
        
       {
          console.log('d')
           if(books.error){
               console.log('error')
        }else{
           dispatch({type:"GET_BOOKS",books: books})
        }
        }
    )
  }
}


export default fetchBooks