import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { apiBaseUrl } from '../../service/global-variables'
import { authSuccess, authFail, loginSuccess, loginFail, registerSuccess, registerFail } from '../actions/user.actions'
import { successAlert, errorAlert } from '../actions/alerts.actions'
import { AUTH_START, LOGIN_START, REGISTER_START } from '../actions/action.config'
import history from '../../modules/app/components/history'
import { setAuthToken } from '../helpers/set-auth-token'

// USER AUTH SAGA
export function* authWatcher() {
  yield takeLatest(AUTH_START, authWorker)
}

export function* authWorker() {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = yield call(authenticateToken)
    yield put(authSuccess(res.data))
  } catch (error) {
    yield put(authFail())
  }
}

const authenticateToken = () => axios.get(`${apiBaseUrl}/user/auth`)

// REGISTER SAGA
export function* registerWatcher() {
  yield takeLatest(REGISTER_START, registerWorker)
}

function* registerWorker(action: any) {
  try {
    const data = action.payload
    const res = yield call(registerUser, data)
    yield put(registerSuccess())
    yield put(successAlert(res.data))
    history.push('/login')
  } catch (error) {
    yield put(registerFail())
    yield put(errorAlert(error.response.data.message))
  }
}

function registerUser(data: any) {
  const post = axios.post(`${apiBaseUrl}/user/register`, { email: data.email, password: data.password })
  return post
}

// LOGIN SAGA
export function* loginWatcher() {
  yield takeLatest(LOGIN_START, loginWorker)
}

function* loginWorker(action: any) {
  try {
    const data = action.payload
    const res = yield call(loginUser, data)
    yield put(loginSuccess(res.data))
    yield put(successAlert('Login Successful!'))
    history.push('/')
  } catch (error) {
    yield put(loginFail())
    yield put(errorAlert(error.response.data.message))
  }
}

function loginUser(data: any) {
  return axios.post(`${apiBaseUrl}/user/login`, { email: data.email, password: data.password })
}



