import { all, fork } from 'redux-saga/effects'
import { authWatcher, registerWatcher, loginWatcher } from './user.saga'
import dashBoardFetchDataWatcher from './dashboard.saga'
function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(registerWatcher),
    fork(loginWatcher),
    fork(dashBoardFetchDataWatcher),
  ])
}
export default rootSaga
