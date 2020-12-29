import React,{Component}  from 'react'
import {connect} from 'react-redux'
import fetchBooks  from '../../actions/fetchBooks'
import FrontBook from './frontBook'
import BackBook from './backBook'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import SearchShow from '../searchShow'
import SearchBack from '../searchBack'

 class  Home extends Component{
   
    

  componentDidMount(){
    console.log('a')
     this.props.fetchBooks()
     console.log('b')
  }

  componentWillUnmount() {
        this.props.resetState({type:"RESET_STATE"})
   }

  renderBooks=()=>{
  
    if( this.props.booksReducer.searchbooks && this.props.booksReducer.searchbooks.length ){
        return this.props.booksReducer.searchbooks.map(book=> 
          ( 
      
          <Flippy 
             flipOnHover={false}
             flipOnClick={true} 
             flipDirection="horizontal" 
             ref={(r) => this.flippy = r} 

          style={{  display: 'grid',width: '200px',float: 'left',
                    border: '1px solid whitesmoke','box-shadow': '5px 5px 15px',
                    border: '1px solid whitesmoke', 'text-align': 'center',height: '300px', 
                    margin: '2em', padding: '2em'}} 
           >
            <FrontSide
              style={{
              height: '300px',width: '200px'
              }}
            >
                <SearchShow props={book.volumeInfo} />
            </FrontSide>
            <BackSide 
              style={{
              height: '300px',width: '200px'
              }}
            >
            <SearchBack props={book.volumeInfo} />
            </BackSide>
       </Flippy>

        ))
    }
       return this.props.booksReducer.books.map(book=> 
      ( 
      <Flippy 
           flipOnHover={false}
            flipOnClick={true} 
           flipDirection="horizontal" 
           ref={(r) => this.flippy = r} 

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
      ))
           
 }

   render(){
          
      return ( 
            <div className="container">
               {this.renderBooks()}
            </div>
          )
    }
     
}

 const mapStateToProps=(state)=>{
    return {booksReducer:state.books}
 }

 const mapDispatchToProps=dispatch=>{
    return {
           fetchBooks:()=> dispatch(fetchBooks()),
           resetState:(type)=>dispatch(type)
        }
 }
    
 export default connect(mapStateToProps,mapDispatchToProps)(Home)