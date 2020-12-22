import { combineReducers } from 'redux'

import userReducer from './userReducer'
import booksReducer from './booksReducer'
import commentsReducer from './commentsReducer'


const rootReducer = combineReducers (

    {   users:userReducer,
        books:booksReducer,
        comments:commentsReducer
    }
     
)


export default rootReducer