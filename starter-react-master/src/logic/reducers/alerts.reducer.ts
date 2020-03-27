import {
  SUCCESS_ALERT,
  INFO_ALERT,
  WARNING_ALERT,
  ERROR_ALERT,
  CLEAR_ALERT_STATE,
} from '../actions/action.config'

const initialState = {
  message: '',
  type: '',
}

export const alertsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUCCESS_ALERT:
      return {
        ...state,
        type: 'success',
        message: action.message,
      }
    case INFO_ALERT:
      return {
        ...state,
        type: 'info',
        message: action.message,
      }
    case WARNING_ALERT:
      return {
        ...state,
        type: 'warning',
        message: action.message,
      }
    case ERROR_ALERT:
      return {
        ...state,
        type: 'error',
        message: action.message,
      }
    case CLEAR_ALERT_STATE:
      return {
        ...state,
        type: '',
        message: '',
      }

    default:
      return state
  }
}
