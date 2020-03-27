import * as React from 'react'
import { lazy /* Suspense*/, useState, useEffect } from 'react'
import { Redirect, RouteComponentProps, Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../history'
import { Paths } from './types'
import { NotFound } from './NotFound'
import ServiceDemo from '../../../ServiceDemo/ServiceDemo'
import { StyledRoutes, StyledRoutesContainer } from './style'
import Navbar from '../navbar/Navbar'
import Loading from '../../../../shared/components/Loading'
// Import auth components
import { Register, Login, ConfirmEmail, ChangePassword, ForgotPassword, ResetPassword } from '../../../auth'

import DummyComponents from '../../../dummycomponents/DummyComponents'
import DashBoard from '../../../dashboard/Dashboard'


const LazyDocument = lazy(() => import('../../../dashboard/Dashboard'))

const notFoundRoute: RouteDefinition = {
  path: '*',
  component: NotFound,
  protected: false,
}

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: DashBoard,
    protected: true,
  },
  {
    path: Paths.login,
    component: Login,
    protected: false,
  },
  {
    path: Paths.register,
    component: Register,
    protected: false,
  },
  {
    path: Paths.confirmEmail,
    component: ConfirmEmail,
    protected: false,
  },
  {
    path: Paths.forgotPassword,
    component: ForgotPassword,
    protected: false,
  },
  {
    path: Paths.resetPassword,
    component: ResetPassword,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.changePassword,
    component: ChangePassword,
    protected: true,
  },
  {
    path: Paths.register,
    component: LazyDocument,
    protected: true,
  },
  {
    path: Paths.dummyComponent,
    component: DummyComponents,
    protected: true,
  },
  {
    path: Paths.serviceDemo,
    component: ServiceDemo,
    protected: true,
  },
].concat(notFoundRoute as any) // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string
  protected?: boolean
  redirect?: string
  component?: any
  routes?: RouteDefinition[]
}

// Set the default redirects
const defaultRedirect = {
  auth: Paths.root,
  guest: Paths.login,
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {
}
interface StateProps {
  loggedIn: boolean
  loading: boolean
}

function getRouteRenderWithAuth(loggedIn: boolean, route: RouteDefinition, i: number) {
  if (loggedIn === route.protected) return () => <route.component />

  if (!route.redirect) {
    return (routeProps: RouteComponentProps<any>) => {
      return <Redirect to={loggedIn ? `${defaultRedirect.auth}` : `${defaultRedirect.guest}`} />
    }
  }

  return (routeProps: RouteComponentProps<any>) => {
    return <Redirect to={`${route.redirect}`} />
  }
}

const Routes: React.FC<Props & RoutesProps & StateProps> = ({ loggedIn, loading }) => {
  // const { loggedIn, loading } = props
  const loading2 = false
  return (
    <StyledRoutesContainer>
      <Router history={history}>
        <Navbar loggedIn={loggedIn} />
        <StyledRoutes>
          <Switch>
            {routes.map((route, i) => {
              if (loading) {
                return <Loading key={i} />
              } else {
                console.log(loading)
                const render = getRouteRenderWithAuth(loggedIn, route, i)
                const rest = { render }
                return <Route key={i} path={route.path} exact {...rest} />
              }
            })}
          </Switch>
        </StyledRoutes>
      </Router>
    </StyledRoutesContainer>
  )
}

const mapStateToProps = (state: any) => ({
  loggedIn: state.user.loggedIn,
  loading: state.user.loading,
})

export default connect(mapStateToProps)(Routes)
