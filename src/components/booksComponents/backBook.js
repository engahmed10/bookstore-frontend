 const BackBook=({props})=>{
     const{id,image,title,authors,price,isbn,year}=props.attributes
    return(  
            <div className="book-card" >
              <div >
                  <h5>{price}</h5>
                  <p >{isbn}</p>
                  <p >{year}</p>
                  <a href="#">Card link</a>
              </div>
            </div>
              
          )
}
export default BackBook