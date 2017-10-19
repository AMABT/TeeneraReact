// @flow
import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication-client'
import openSocket from 'socket.io-client'
import rx from 'feathers-reactive'
import RxJS from 'rxjs'

// eslint-disable-next-line
const socket = window.socket = openSocket('http://localhost:3030')
export const app = window.app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({storage: window.localStorage}))
  .configure(rx(RxJS))

export const userService = app.service('user')
export const experiencesService = app.service('experiences')
