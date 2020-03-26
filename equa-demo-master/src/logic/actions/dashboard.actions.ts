import { DASHBOARD_FETCH_DATA_START, DASHBOARD_FETCH_DATA_SUCCESS, DASHBOARD_FETCH_DATA_FAILURE } from './action.config'
export function reqDashBoardDataFetch(data: any) {
  return {
    type: DASHBOARD_FETCH_DATA_START,
    payload: data,
  }
}
export function successDashBoardDataFetch(data: any) {
  return {
    type: DASHBOARD_FETCH_DATA_SUCCESS,
    data,
  }
}
export function failureDashBoardDataFetch() {
  return {
    type: DASHBOARD_FETCH_DATA_FAILURE,
  }
}
