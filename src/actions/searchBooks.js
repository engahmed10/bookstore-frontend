const SearchBooks=(query)=>{
 console.log(`query`,query)
    return (dispatch)=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDs8IXUOfIeXgaZ54c1pX-zi0Sw8avV5EY`)
            .then(response=>response.json())
            .then(data=> dispatch({type:"SEARCH_BOOK",searchbooks:data.items}))

    }


}

export default SearchBooks