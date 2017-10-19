// @flow
type Action = { type: 'USER_LOGGED_OUT' }
  | { type: 'USER_CREATED' | 'USER_LOGGED', payload: { user: Object } }

export const userActions = (state: Object = {}, action: Action) => {
  switch (action.type) {
    case 'USER_CREATED': {
      return {...state, user: action.payload.user, login: false}
    }
    case 'USER_LOGGED': {
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

// @Suggestion redux reducing boilerplate - generating reducers
