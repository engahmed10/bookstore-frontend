 import { Link } from 'react-router-dom' 
 import Comments from "../commentsComponent/comments";

 const FrontBook=({props})=>{
     const{id,image,title,authors,price,isbn,year}=props

    return(  
            <div >
              <img class="" src={image}   alt="card"  />
              <div>
                  <h5 style={{ "height": "11px"}} >{title}</h5>
                  <p style={{"font-family":"Lucida Console, Courier, monospace"}}>{authors}</p>

                  <Link style={{marginright: '12px',"background-color":"#eff0e9"}}
                   key={id}
                  to={`/books/${id}/comments`} 
                  >Reply with comment for this book</Link>
              </div>
            </div>  
          )
}
export default FrontBook