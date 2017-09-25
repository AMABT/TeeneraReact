export function userActions(state = {}, action = null) {
  switch (action.type) {
    case 'USER_CREATED': {
      return {...state, userEmail: action.payload.user.email}
    }
    case 'USER_FETCHED': {
      return {...state, user: action.payload.user, login: true}
    }
    case 'USER_LOGGED_OUT': {
      return {...state, user: null, login: false}
    }
    default: {
      return state
    }
  }
}
