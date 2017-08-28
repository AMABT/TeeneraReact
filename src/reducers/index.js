import {combineReducers} from 'redux';
import {toggleHomeHeaderContent} from "./homepage";
import {userActions} from "./user";

const rootReducer = combineReducers({
  homeContent: toggleHomeHeaderContent,
  users: userActions
})

export default rootReducer
