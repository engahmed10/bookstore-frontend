const SearchShow=({props})=>{


    return(  
            <div >
            {props.imageLinks?
              <img class=""  src={props.imageLinks["smallThumbnail"]} alt="card"  />
              :""}
                  <h5 >{props.title}</h5>
                  <p > { props.authors}</p>
            </div>  
          )

}

export default SearchShow 

