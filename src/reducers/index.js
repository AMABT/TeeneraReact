import {combineReducers} from 'redux';
import {userActions} from "./user";

const rootReducer = combineReducers({
  users: userActions
})

export default rootReducer
