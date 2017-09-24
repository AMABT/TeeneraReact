import {userService} from "../feathers/index";

export function createUser(email, password) {
  return (dispatch) => {
    userService
      .create({
        email,
        password
      })
      .then(user => {
        console.log(user);
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
        console.log(response)
        dispatch({
          type: 'USER_FETCHED',
          payload: {user: response.data[0]}
        })
      })
  }
}
