// @flow
import {userService, app} from '../feathers/index';

const localStorageUser = 'user';

export const createUser = (email: string, password: string) => {
  return (dispatch: ({ type: string, payload: {} }) => void) => {
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
  return async (dispatch: ({ type: string }) => void) => {
    dispatch({
      type: 'USER_LOGGING'
    })
    const response = await app.authenticate({strategy: 'local', email, password})
    // const payload = await app.passport.verifyJWT(response.accessToken)
    const user = response.user
    localStorage.setItem(localStorageUser, JSON.stringify(user))
    dispatch({
      type: 'USER_LOGGED',
      payload: {user}
    })
  }
}

export const checkUserIsLogged = () => {
  let user = localStorage.getItem(localStorageUser);
  if (user && (user = JSON.parse(user))) { /*eslint no-cond-assign: "off"*/
    return {
      type: 'USER_LOGGED',
      payload: {user}
    }
  }
  return {
    type: 'USER_NOT_LOGGED'
  }
}

export const logoutUser = () => {
  localStorage.clear();
  return {
    type: 'USER_LOGGED_OUT'
  }
}
