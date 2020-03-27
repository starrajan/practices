import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { successDashBoardDataFetch, failureDashBoardDataFetch } from '../actions/dashboard.actions'
import { DASHBOARD_FETCH_DATA_START } from '../actions/action.config'

//Watcher takes two arguments (action and generator function).

export default function* dashBoardFetchDataWatcher() {
  yield takeLatest(DASHBOARD_FETCH_DATA_START, dashBoardFetchDataWorker)
}

function* dashBoardFetchDataWorker(action: any) {
  try {
    const data = action.payload
    const res = yield call(dashBoardFetchData, data)
    yield put(successDashBoardDataFetch(res.data))
  } catch (err) {
    yield put(failureDashBoardDataFetch())
  }
}

function dashBoardFetchData(data: any) {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 150 + 1)}`)
}
