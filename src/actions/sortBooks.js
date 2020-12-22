const SortBooks=(books)=>{
    return (dispatch)=>{

        
    return   dispatch({ type:'SORT_BOOKS' ,sortedBooks:books.sort(function(a, b) {
               var nameA = a.title.toUpperCase(); // ignore upper and lowercase
               var nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
                return 0;
            })
         })
    }

}



   

export default SortBooks