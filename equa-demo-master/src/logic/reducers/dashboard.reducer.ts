import { DASHBOARD_FETCH_DATA_START, DASHBOARD_FETCH_DATA_SUCCESS, DASHBOARD_FETCH_DATA_FAILURE } from '../actions/action.config'

const initialState = {
  loading: false,
  data: '',
}

export default function dashboardReducer(state = { initialState }, action: any) {
  switch (action.type) {
    case DASHBOARD_FETCH_DATA_START:
      return {
        ...state,
        loading: true,
      }
    case DASHBOARD_FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case DASHBOARD_FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
