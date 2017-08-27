import {combineReducers} from 'redux';

function toggleLogin(state = {visible: false}, action = null) {

  switch (action.type) {
    case 'SHOW_LOGIN': {
      return {...state, visible: !state.visible}
    }
    default: {
      return state
    }
  }
}

const rootReducer = combineReducers({
  toggleLogin
})

export default rootReducer
