 const BackBook=({props})=>{
     const{id,image,title,authors,price,isbn,year}=props.attributes
    return(  
            <div className="" >
              <div >
                  <h5>{price}</h5>
                  <p >{isbn}</p>
                  <p >{year}</p>
                   <Link style={{marginright: '12px'}}
                   key={id}
                  to={`/books/${id}`}
                  >{title}</Link>
              </div>
            </div>
              
          )
}
export default BackBook