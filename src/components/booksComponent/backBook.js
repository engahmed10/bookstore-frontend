  import { Link } from 'react-router-dom' 

 const BackBook=({props})=>{
     const{id,image,title,authors,price,isbn,year,}=props
    return(  
            <div className="" >
              <div >
                  <h5>${price}</h5>
                  <p >ISBN: {isbn}</p>
                  <p >Publish Year: {year}</p>
                   <Link style={{marginright: '12px'}}
                   key={id}
                  to={`/books/${id}`}
                  >{}</Link>
              </div>
            </div>
              
          )
}
export default BackBook