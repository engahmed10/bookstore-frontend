 const FrontBook=({props})=>{
     const{id,image,title,authors,price,isbn,year}=props.attributes
   console.log(`boo`,props.attributes)

    return(  
            <div className="book-card" >
              <img class="book-card-img" src={image}   alt="card"  />
              <div >
                  <h5  >{title}</h5>
                  <p >{authors}</p>
                  <a href="#">Card link</a>
              </div>
            </div>

              
          )
}
export default FrontBook