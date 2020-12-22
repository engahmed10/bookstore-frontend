import Comments from '../components/commentsComponent/comments'
const   CommentsContainer=(props)=>  {
    
    return (   
        <div>
            <Comments match={props.match} userinfo={props.userinfo} />            
        </div>

    )        
    
}


export default CommentsContainer
