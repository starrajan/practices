import { combineReducers } from 'redux'
import { alertsReducer } from './alerts.reducer'
import { userReducer } from './user.reducer'
import dashboardReducer from './dashboard.reducer'

const rootReducer = combineReducers({
  alerts: alertsReducer,
  user: userReducer,
  dashboardReducer,
})
export default rootReducer
