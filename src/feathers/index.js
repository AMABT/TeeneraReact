import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import openSocket from 'socket.io-client'
import rx from 'feathers-reactive'
import RxJS from 'rxjs'

// eslint-disable-next-line
const socket = window.socket = openSocket('http://localhost:3030')
const app = window.app = feathers()
  .configure(socketio(socket))
  .configure(rx(RxJS))

export const userService = app.service('user')
