import * as React from 'react'
import { DarkNavbar, DarkNavLinksWrapper,LinkStyleMobile ,LinkStyle,ActionsLabel,DarkNavLinksWrapperMobile} from './style'
import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <DarkNavbar>
      <DarkNavLinksWrapper>
        <Link style={LinkStyle} to="/dashboard">Dashboard</Link>
        <Link style={LinkStyle} to="/cap-table">Cap Table</Link>
        <Link style={LinkStyle} to="/operating-agreement">Governing Document</Link>
        <Link style={LinkStyle} to="/team-member">Team Members</Link>
        <Link style={LinkStyle} to="/documents">Documents</Link>
        <Link style={LinkStyle} to="/actions">Actions  <ActionsLabel>3</ActionsLabel></Link>
      </DarkNavLinksWrapper>

      <DarkNavLinksWrapperMobile>
        <Link style={LinkStyleMobile} to="/dashboard">Dashboard</Link>
        <Link style={LinkStyleMobile} to="/cap-table">Cap Table</Link>
        <Link style={LinkStyleMobile} to="/operating-agreement">Governing Document</Link>
        <Link style={LinkStyleMobile} to="/team-member">Team Members</Link>
        <Link style={LinkStyleMobile} to="/documents">Documents</Link>
        <Link style={LinkStyleMobile} to="/actions">Actions  <ActionsLabel>3</ActionsLabel></Link>
      </DarkNavLinksWrapperMobile>

    </DarkNavbar>
  )
}

export default MainNav
