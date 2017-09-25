import {userService} from "../feathers/index";

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

export function fetchUser(email, password) {
  return (dispatch) => {
    dispatch({
      type: 'USER_FETCHING'
    })
    userService
      .find({email, password})
      .then(response => {
        const user = response.data[0];
        localStorage.setItem(localStorageUser, JSON.stringify(user));
        dispatch({
          type: 'USER_FETCHED',
          payload: {user}
        })
      })
  }
}

export function checkUserIsLogged() {
  let user = localStorage.getItem(localStorageUser);
  if (user && (user = JSON.parse(user))) { /*eslint no-cond-assign: "off"*/
    return {
      type: 'USER_FETCHED',
      payload: {user}
    }
  }
  return {
    type: 'USER_NOT_LOGGED'
  }
}
