// @flow
import {combineReducers} from 'redux'
import {userActions} from './user'
import {experiencesActions} from './experiences'

const rootReducer = combineReducers({
  users: userActions,
  experiences: experiencesActions
})

export default rootReducer
