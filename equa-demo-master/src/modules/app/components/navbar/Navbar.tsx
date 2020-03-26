import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../../../logic/actions/user.actions'
import {
  NavbarContent,
  NavBarContainer,
  OrgSwitch,
  OrgSwitchImg,
  OrgSwitchIcon,
  OrgSwitchText,
  SwitchAreaHead,
  SideBar,
  ProfileDetails,
  ProfileName,
  LinksContainer,
  SideBarLinks,
  WhiteArrow,
  NavBarImgCont,
  SwitchArea,
  SwitchAreaList,
  ProfilePhoto,
  WhiteArrowDown,
} from './style'
import MainNav from './MainNav'
import history from '../history'
import { Paths } from '../routes/types'

interface Props {
  loggedIn: boolean
  logout: any
}

function Navbar(props: Props) {
  const userImg = {
    borderRadius: '50%',
    height: '34px',
    width: '34px',
    cursor: 'pointer',
  }
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [switchOrg, setSwitchOrg] = React.useState(false)

  const { loggedIn } = props
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const openOrgSwitch = () => {
    setSwitchOrg(!switchOrg)
  }
  const toPortfolio=()=>{
    history.push(Paths.Portfolio)
  }

  const drawer = (
    <div>
      <Link onClick={handleDrawerToggle} to="/login">
        Login
      </Link>

      <Link onClick={handleDrawerToggle} to="/register">
        Register
      </Link>

      <Link onClick={handleDrawerToggle} to="/dummy">
        Dummy
      </Link>

      <Link onClick={handleDrawerToggle} to="/service">
        Service
      </Link>

      <Link onClick={handleDrawerToggle} to="/change-password">
        Change password
      </Link>
    </div>
  )

  const handleLogout = () => {
    props.logout()
  }

  const goTo = (path: string) => {
    handleDrawerToggle()
    history.push('/user-profile/Profile')
  }

  const goToReferral = (path: string) => {
    handleDrawerToggle()
    history.push('/user-profile/Referrals')
  }
  const goToSettings = (path: string) => {
    handleDrawerToggle()
    history.push('/user-profile/settings')
  }

  const goToSubscription = (path: string) => {
    handleDrawerToggle()
    history.push('/user-profile/Subscriptions')
  }

  const orgCreate = () => {
    history.push(Paths.orgCreate)
  }

  

  const loggedInLinks = (
    <Fragment>
      <Link to="/dummy">Dummy</Link>
      <Link to="/service">Service</Link>
      <Link to="/change-password">Change password</Link>
      <Link onClick={handleLogout} to="/">
        Log Out
      </Link>
    </Fragment>
  )

  const loggedOutLinks = (
    <div>
      <NavBarContainer>
        <OrgSwitch onClick={openOrgSwitch}>
          <OrgSwitchImg src={require('assets/image/org1.png')} alt="" />
          <OrgSwitchText>Cognition Inc</OrgSwitchText>
          <OrgSwitchIcon src={require('assets/image/white-down-arrow.png.png')} alt="" />

          <SwitchArea isSwitch={switchOrg}>
            <SwitchAreaHead>Your Organizations </SwitchAreaHead>
            <SwitchAreaList>
              <OrgSwitchImg src={require('assets/image/org1.png')} alt="" />
              <OrgSwitchText>Cognition Inc</OrgSwitchText>
            </SwitchAreaList>
            <SwitchAreaList>
              <OrgSwitchImg src={require('assets/image/org1.png')} alt="" />
              <OrgSwitchText>Cognition Inc</OrgSwitchText>
            </SwitchAreaList>
            <SwitchAreaList onClick={orgCreate}>
              <OrgSwitchImg src={require('assets/image/cre1.svg')} alt="" />
              <OrgSwitchText>Start New Org</OrgSwitchText>
            </SwitchAreaList>
            <SwitchAreaHead>Your Profiles </SwitchAreaHead>
            <SwitchAreaList onClick={toPortfolio}>
              <OrgSwitchImg src={require('assets/image/portfolio1.png')} alt="" />
              <OrgSwitchText>Custom Portfo...</OrgSwitchText>
            </SwitchAreaList>
          </SwitchArea>
        </OrgSwitch>

        <NavBarImgCont onClick={() => handleDrawerToggle()}>
          <img style={userImg} src={require('assets/image/profile.png')} alt="" />

          <WhiteArrowDown src={require('assets/image/white-down-arrow.png.png')} alt="" />
        </NavBarImgCont>
      </NavBarContainer>
      <SideBar isOpen={mobileOpen}>
        <ProfileDetails onClick={() => handleDrawerToggle()}>
          <div>
            <ProfilePhoto src={require('assets/image/profile.png')} alt="" />
          </div>
          <ProfileName>Ann Jurek</ProfileName>
          <WhiteArrow src={require('assets/image/white-down-arrow.png.png')} alt="" />
        </ProfileDetails>
        <LinksContainer>
          <div>
            <SideBarLinks>EQUACASH- $960</SideBarLinks>
            <SideBarLinks onClick={() => goTo(Paths.Portfolio)}>My PORTFOLIO</SideBarLinks>
            <SideBarLinks onClick={() => goToReferral(Paths.userProfile)}>My Referrals</SideBarLinks>
            <SideBarLinks onClick={() => goTo(Paths.userProfile)}>My Profile</SideBarLinks>
            <SideBarLinks onClick={() => goToSubscription(Paths.userProfile)}>Subscription and Payments</SideBarLinks>
            <SideBarLinks onClick={() => goToSettings(Paths.userProfile)}>My Settings</SideBarLinks>
          </div>

          <SideBarLinks onClick={() =>goTo(`${Paths.auth}/login`)}>Log out</SideBarLinks>
        </LinksContainer>
      </SideBar>
      <MainNav />
    </div>
  )

  return <NavbarContent>{loggedIn ? loggedInLinks : loggedOutLinks}</NavbarContent>
}

export default connect(null, { logout })(Navbar)
