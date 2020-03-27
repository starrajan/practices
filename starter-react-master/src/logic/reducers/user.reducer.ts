import {
  REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL,
  LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
  AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT
} from '../actions/action.config'

const initialState = {
  loading: true,
  loggedIn: false,
  token: localStorage.getItem('token'),
  email: null,
  roles: [],
}

export const userReducer = (state = initialState, action: any) => {
  const { type, payload, error } = action
  
  switch (type) {
    case AUTH_START:
    case REGISTER_START:
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        loading: false,
        loggedIn: true,
        token: payload.token,
        email: payload.email,
        roles: payload.roles,
      }
    case AUTH_FAIL:
    case LOGOUT:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        loading: false,
        loggedIn: false,
        token: null,
        email: null,
        roles: [],
        error,
      }
    default:
      return state
  }
}
