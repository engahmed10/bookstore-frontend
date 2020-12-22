 const BackBook=({props})=>{
     const{id,image,title,authors,price,isbn,year,}=props
    return(  
            <div className="" >
              <div >
                  <h5>${price}</h5>
                  <p >ISBN: {isbn}</p>
                  <p >Publish Year: {year}</p>
              </div>
            </div>
              
          )
}
export default BackBook