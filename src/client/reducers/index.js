import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import adminsReducer from './admins-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  admins: adminsReducer,
  auth: authReducer,
})

export default rootReducer
