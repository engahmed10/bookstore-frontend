import { combineReducers } from 'redux'

import userReducer from './userReducer'
import myReducer from './myReducer'

const rootReducer = combineReducers (
    {   userReducer,
        myReducer
    }
     
)


export default rootReducer