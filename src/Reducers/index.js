import { combineReducers } from 'redux'

import userReducer from './userReducer'
import booksReducer from './booksReducer'

const rootReducer = combineReducers (
    {   userReducer,
        booksReducer
    }
     
)


export default rootReducer