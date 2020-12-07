const fetchBooks =()=>{
  console.log(`inside action fetch book`)
  return(dispatch)=>{
    console.log(`inside dispatch`)
   dispatch({type:'LOADING_BOOKS'})
   console.log(`After loading`)
   console.log(`http://127.0.0.1:3000/api/v1/books`)
  fetch('http://127.0.0.1:3000/api/v1/books').then(response=>
     response.json()
  )
  .then(books=>
   
       {if(books.error){
               console.log('error')
        }else{
          console.log(`books inside fetchbooks`,books) 
               dispatch({type:"GET_BOOKS",books: books})
        }
        }
    )
  }
}


export default fetchBooks