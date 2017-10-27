// @flow
type Action = { type: 'USER_LOGGED_OUT' | 'USER_LOGGING' }
  | { type: 'USER_CREATED' | 'USER_LOGGED', payload: { user: Object } }

export const userActions = (state: Object = {loading: true}, action: Action) => {
  switch (action.type) {
    case 'USER_LOGGING': {
      return {...state, loading: true, login: false}
    }
    case 'USER_CREATED': {
      return {...state, loading: false, login: false, user: action.payload.user}
    }
    case 'USER_LOGGED': {
      return {...state, loading: false, login: true, user: action.payload.user}
    }
    case 'USER_LOGGED_OUT': {
      return {...state, loading: false, login: false, user: null}
    }
    default: {
      return state
    }
  }
}

// @Suggestion redux reducing boilerplate - generating reducers
