import * as React from 'react'
import { lazy /* Suspense*/, useState, useEffect } from 'react'
import { Redirect, RouteComponentProps, Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../history'
import { Paths } from './types'
import { NotFound } from './NotFound'
import { StyledRoutesContainer, WrapAllRoutes } from './style'
import Navbar from '../navbar/Navbar'

import Loading from '../../../../shared/components/Loading'
// Import auth components
// import { Register, Login, ConfirmEmail, ChangePassword, ForgotPassword, ResetPassword, Terms, ResetPasswordEmail } from '../../../auth'
import Auth from '../../../auth/auth'
import TeamMembers from '../../../team-members'
import TeamMembersProfile from '../../../team-members/components/team-members-profile/team-members-profile'
import EditTeamMembersProfile from '../../../team-members/components/edit-member-profile/edit-member-profile'
import AddTeamMembers from '../../../team-members/components/add-team-member/add-team-member'
import {
  UserProfile,
  EditProfile,
  UserSettings,
  PurchaseSubscription,
  Portfolio,
  CompletePurchase,
  NewSubscription,
} from '../../../profile'
import { Documents } from '../../../documents'
import { OperatingAgreement, EditOperatingAgreement, CreateOperatingAgreement } from '../../../operating-agreement'
import { Actions, ActionsResults, ActionRequest, ActionDetails } from '../../../actions'
import Dashboard from '../../../dashboard/Dashboard'
import StartUp from '../../../startup'

import StartUpScreen from '../../../startupScreen/StartUpScreen'
import Organization from '../../../organization'
import { DataRooms, DataRoom, CreateDataRoom } from '../../../data-rooms'
import CapTable from '../../../cap-table/CapTable'
import TransferShares from '../../../transfer-shares'
import DraftUnits from '../../../draft-units'
const LazyDocument = lazy(() => import('../../../startupScreen'))

const notFoundRoute: RouteDefinition = {
  path: '*',
  component: NotFound,
  protected: false,
}

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: StartUpScreen,
    protected: false,
  },
  {
    path: Paths.auth + '/:type',
    component: Auth,
    protected: false,
  },
  {
    path: Paths.orgCreate,
    component: Organization,
    protected: false,
  },
  {
    path: Paths.orgImport,
    component: Organization,
    protected: false,
  },
  {
    path: Paths.capTable,
    component: CapTable,
    protected: false,
  },
  {
    path: Paths.sharesTransfer,
    component: TransferShares,
    protected: false,
  },
  {
    path: Paths.draftUnits,
    component: DraftUnits,
    protected: false,
  },
  {
    path: Paths.TeamMember,
    component: TeamMembers,
    protected: false,
  },
  {
    path: Paths.AddTeamMembers,
    component: AddTeamMembers,
    protected: false,
  },
  {
    path: Paths.OperatingAgreement,
    component: OperatingAgreement,
    protected: false,
  },
  {
    path: Paths.EditOperatingAgreement,
    component: EditOperatingAgreement,
    protected: false,
  },
  {
    path: Paths.CreateOperatingAgreement,
    component: CreateOperatingAgreement,
    protected: false,
  },
  {
    path: Paths.teamMembersProfile + '/:memberId',
    component: TeamMembersProfile,
    protected: false,
  },
  {
    path: Paths.editTeamMembersProfile + '/:memberId',
    component: EditTeamMembersProfile,
    protected: false,
  },

  {
    path: Paths.Documents,
    component: Documents,
    protected: false,
  },
  // {
  //   path: Paths.login,
  //   component: Login,
  //   protected: false,
  // },
  // {
  //   path: Paths.register,
  //   component: Register,
  //   protected: false,
  // },
  // {
  //   path: Paths.confirmEmail,
  //   component: ConfirmEmail,
  //   protected: false,
  // },
  // {
  //   path: Paths.forgotPassword,
  //   component: ForgotPassword,
  //   protected: false,
  // },
  // {
  //   path: Paths.resetPassword,
  //   component: ResetPassword,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.changePassword,
  //   component: ChangePassword,
  //   protected: false,
  // },
  // {
  //   path: Paths.resetEmail,
  //   component: ResetPasswordEmail,
  //   protected: false,
  // },
  {
    path: Paths.register,
    component: LazyDocument,
    protected: false,
  },
  // {
  //   path: Paths.terms,
  //   component: Terms,
  //   protected: false,
  // },
  {
    path: Paths.userProfile+'/:tabOption',
    component: UserProfile,
    protected: false,
  },
  // {
  //   path: Paths.UserSettings,
  //   component: UserSettings,
  //   protected: false,
  // },
  {
    path: Paths.purchase,
    component: PurchaseSubscription,
    protected: false,
  },

  {
    path: Paths.CompletePurchase,
    component: CompletePurchase,
    protected: false,
  },

  {
    path: Paths.NewSubscription,
    component: NewSubscription,
    protected: false,
  },

  {
    path: Paths.EditUser,
    component: EditProfile,
    protected: false,
  },
  {
    path: Paths.Portfolio,
    component: Portfolio,
    protected: false,
  },
  {
    path: Paths.Actions,
    component: Actions,
    protected: false,
  },
  {
    path: Paths.ActionsResults,
    component: ActionsResults,
    protected: false,
  },
  {
    path: Paths.ActionRequest,
    component: ActionRequest,
    protected: false,
  },

  {
    path: Paths.ActionDetails + '/:action',
    component: ActionDetails,
    protected: false,
  },
  {
    path: Paths.startUp,
    component: StartUp,
    protected: false,
  },
  {
    path: Paths.dataRooms,
    component: DataRooms,
    protected: false,
  },
  {
    path: Paths.dataRoom + '/:dataRoomId',
    component: DataRoom,
    protected: false,
  },
  {
    path: Paths.createDataRoom,
    component: CreateDataRoom,
    protected: false,
  },
  {
    path: Paths.Dashboard,
    component: Dashboard,
    protected: false,
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
interface RoutesProps {}
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
        <WrapAllRoutes>
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
        </WrapAllRoutes>
      </Router>
    </StyledRoutesContainer>
  )
}

const mapStateToProps = (state: any) => ({
  loggedIn: state.user.loggedIn,
  loading: state.user.loading,
})

export default connect(mapStateToProps)(Routes)
