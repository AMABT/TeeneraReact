// @flow
export const homeHeaderContent = (content: string) => {
  switch (content) {
    case 'LOGIN': {
      return {
        type: 'HOME_HEADER_SHOW_LOGIN'
      }
    }
    case 'SIGNUP': {
      return {
        type: 'HOME_HEADER_SHOW_SIGNUP'
      }
    }
    default: {
      return {
        type: 'HOME_HEADER_SHOW_BANNER'
      }
    }
  }
}
