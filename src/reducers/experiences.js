// @flow

type Action = {
  type: 'EXPERIENCES_FETCHED',
  payload: Array<Object>
}

export const experiencesActions = (state: Object = {}, action: Action) => {
  switch (action.type) {
    case 'EXPERIENCES_FETCHED':
      return {...state, experiences: action.payload}
    default:
      return state
  }
}
