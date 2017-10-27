// @flow
import {userService, app} from '../feathers/index';

type Dispatch = ({ type: string, payload?: {} }) => void

export const createUser = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    userService
      .create({
        email,
        password
      })
      .then(user => {
        dispatch({
          type: 'USER_CREATED',
          payload: {user}
        })
      })
  }
}

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'USER_LOGGING'
    })
    const response = await app.authenticate({strategy: 'local', email, password})
    // const payload = await app.passport.verifyJWT(response.accessToken)
    const user = response.user
    dispatch({
      type: 'USER_LOGGED',
      payload: {user}
    })
  }
}

export const checkUserIsLogged = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'USER_LOGGING'
    })
    try {
      const {user} = await app.authenticate()
      dispatch({
        type: 'USER_LOGGED',
        payload: {user}
      })
    } catch (err) {
      dispatch({
        type: 'USER_LOGGED_OUT',
        payload: {err}
      })
    }
  }
}

export const logoutUser = () => {
  app.logout()
  return {
    type: 'USER_LOGGED_OUT'
  }
}
