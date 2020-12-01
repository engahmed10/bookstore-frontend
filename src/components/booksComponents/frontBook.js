 import { Link } from 'react-router-dom' 
 
 const FrontBook=({props})=>{
     const{id,image,title,authors,price,isbn,year}=props.attributes
   console.log(`boo`,props.attributes)

    return(  
            <div className="" >
              <img class="" src={image}   alt="card"  />
              <div >
                  <h5  >{title}</h5>
                  <p >{authors}</p>
                  <Link style={{marginright: '12px'}}
                   key={id}
                  to={`/books/${id}`}
                  >{title}</Link>
                
              </div>
            </div>

              
          )
}
export default FrontBook