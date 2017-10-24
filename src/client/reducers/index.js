import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
})

export default rootReducer
