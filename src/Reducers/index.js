import { combineReducers } from 'redux'

import userReducer from './userReducer'
import booksReducer from './booksReducer'
import commentsReducer from './commentsReducer'


const rootReducer = combineReducers (

    {   userReducer,
        booksReducer,
        commentsReducer
    }
     
)


export default rootReducer