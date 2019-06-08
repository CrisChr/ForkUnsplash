import { combineReducers } from 'redux'
import { counter } from './counterReducer'
import { todoer } from  './todoReducer'



export default combineReducers({counter})
