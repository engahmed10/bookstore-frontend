const fetchUsers=()=>{

  return (dispatch)=>{
    fetch(`http://127.0.0.1:3000/api/v1/users`)
    .then(response=> response.json())
    .then(users=>{
        if(users.error){
               console.log('error')
        }else
        {
               dispatch({type:'GET_USERS',users: users.data})
        }
        }
    )

  }


}

export default fetchUsers