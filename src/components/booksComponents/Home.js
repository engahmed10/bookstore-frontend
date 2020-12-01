import React,{Component}  from 'react'
import {connect} from 'react-redux'
import  fetchBooks  from '../../actions/fetchBooks'
import FrontBook from './frontBook'
import BackBook from './backBook'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

 
 class  Home extends Component{
   
    

  componentDidMount(){
   
     this.props.fetchBooks()
  }


  renderBooks=()=>{

     return this.props.books.books.map(book=> 
      (    
        
      <Flippy 
           flipOnHover={false}
            flipOnClick={true} 
           flipDirection="horizontal" // horizontal or vertical
           ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()

          style={{  display: 'grid',width: '200px',float: 'left',
          border: '1px solid whitesmoke','box-shadow': '5px 5px 15px rgba(0,0,0,0.9)',
           border: '1px solid whitesmoke', 'text-align': 'center',height: '300px', 
            margin: '2em', padding: '2em'}} 
      >
            <FrontSide
              style={{
              height: '300px',width: '200px'
              }}
            >
                <FrontBook props={book} />
            </FrontSide>
            <BackSide 
              style={{
              height: '300px',width: '200px'
              }}
               
               >

              <BackBook props={book}   />
            </BackSide>
       </Flippy>
      )
      )
  }

   render(){
           
      return ( 
            <div className="">
               {this.renderBooks()}
            </div>
          )
   }
     
 }

 const mapStateToProps=state=>{
    return {books: state.booksReducer}
 }

 const mapDispatchToProps=dispatch=>{
    return {
        fetchBooks:()=> dispatch(fetchBooks())
        }
 }
    


 export default connect(mapStateToProps,mapDispatchToProps)(Home)