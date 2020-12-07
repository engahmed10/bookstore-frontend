 import { Link } from 'react-router-dom' 
 import { Route }  from 'react-router-dom'
 import Comments from "../commentsComponent/comments";

 const FrontBook=({props})=>{
     const{id,image,title,authors,price,isbn,year}=props

    return(  
            <div >
              <img class="" src={image}   alt="card"  />
              <div  >
                  <h5  >{title}</h5>
                  <p >{authors}</p>

                  <Link style={{marginright: '12px'}}
                   key={id}
                  to={`${id}/comments`} 
                  >Comment for this book</Link>
                 
              </div>
            </div>  
          )
}
export default FrontBook