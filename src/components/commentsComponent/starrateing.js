import react from 'react';
import  React, {useState}  from 'react' 
const StarRateing = () => {
  
   const [hoverRating, setHoverRating] = useState(0);
   const [rating, setRating] = useState(0);
   const saveRating=(index)=>{
         setRating(index)
   }

    const onMouseLeave=()=>{
         setHoverRating(0)
    }

   const  onMouseEnter=(index)=>{
        setHoverRating(index)
    }

   const  starIcon=(fill)=>( 
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" >
           <polygon fill={`${fill}`} stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,47 12,62 20,38 2,24 24,24 32,1 40,24   62,24 44,38 52,62 "/>
       </svg>
    )
             
    return (
           <div class="cursor"  style={{'display':'flex'}}  >{
                
                [1,2,3,4,5].map((index)=> 
                    <div onClick={()=>saveRating(index)} onMouseEnter={()=>onMouseEnter(index)}  
                           onMouseLeave={()=>onMouseLeave}>
                      {  hoverRating >= index ?                          
                             starIcon('yellow')
                          :  starIcon('none')
                                          
                      }
                       
                    </div>
                )}
                {rating}
                </div>
    )
}

export default StarRateing