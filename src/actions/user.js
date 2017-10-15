import {userService, app} from "../feathers/index";

const localStorageUser = 'user';

export function createUser(email, password) {
  return (dispatch) => {
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

export function loginUser(email, password) {
  return async (dispatch) => {
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

export function checkUserIsLogged() {
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

export function logoutUser() {
  localStorage.clear();
  return {
    type: 'USER_LOGGED_OUT'
  }
}
