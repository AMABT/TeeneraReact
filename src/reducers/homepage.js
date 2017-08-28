export function toggleHomeHeaderContent(state = {}, action = null) {

  switch (action.type) {
    case 'HOME_HEADER_SHOW_LOGIN': {
      return {...state, contentVisible: 'LOGIN'}
    }
    case 'HOME_HEADER_SHOW_SIGNUP': {
      return {...state, contentVisible: 'SIGNUP'}
    }
    default: {
      return {...state, contentVisible: 'BANNER'}
    }
  }
}
