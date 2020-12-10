const SearchShow=({props})=>{


    return(  
            <div >
           
              <img class=""  src={props.imageLinks["smallThumbnail"]} alt="card"  />
              <div >
                  <h5  >{props.title}</h5>
                  <p >{props.authors}</p>

              </div>
         
            </div>  
          )

}

export default SearchShow 

