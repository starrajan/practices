import styled from 'styled-components'
import { colors, screenSizes } from '../../../../shared/styles/theme'

export const NavbarContent = styled.div`
  position: fixed;
  width: 100%;
  background:${colors.themeBackground}
  z-index: 10000;
  max-width: 1800px;
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 20px 40px;
  }
`

interface SideBarProps {
  isOpen: boolean
}

interface SwitchProps {
  isSwitch: boolean
}

export const SwitchArea = styled.div<SwitchProps>`
  width: 220px;
  transform: ${props => (props.isSwitch ? 'translateY(40px)' : 'translateY(0px)')};
  display: ${props => (props.isSwitch ? 'block' : 'none')};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.basicCard};
  transition: all 700ms;
  height: 360px;
  overflow: auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 450px;
    top: 25px;
    width: 280px;
  }
`

export const SideBar = styled.div<SideBarProps>`
  width: 260px;
  transform: ${props => (props.isOpen ? 'translateX(0px)' : 'translateX(100%)')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.ActionCardColor};
  transition: all 700ms;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 327px;
  }
`

export const ProfileDetails = styled.div`
  background: #475e6c;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 40px 0px 36px 40px;
  }
`

export const ProfilePhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

export const LinksContainer = styled.div`
  background: ${colors.ActionCardColor};
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px 40px 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 60px 0px 52px 40px;
  }
`

export const SideBarLinks = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.white};
  margin-bottom: 26px;
  cursor: pointer;
  font-family: Bold;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-bottom: 36px;
    font-size: 14px;
  }
`

export const ProfileName = styled.div`
  font-size: 16px;
  color: ${colors.white}
  margin-left: 20px;
  font-family: Bold;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 24px;
  }
`

export const DarkNavbar = styled.div`
background:${colors.DarkNav}
padding: 20px;
font-family: Regular;
text-transform: uppercase;
font-size: 14px;
`
export const DarkNavLinksWrapper = styled.div`
  display: none;
  @media (min-width: ${screenSizes.mediaL}px) {
    display: flex;
    justify-content: center;
  }
`


export const DarkNavLinksWrapperMobile = styled.div`
  display: flex;
  justify-content: center;
  max-width: 290px;
  overflow: auto;
  margin:auto;
  justify-content: flex-start;
  @media (min-width: ${screenSizes.mediaL}px) {
    display: none;
  }
`

export const LoggedOut = styled.div`
display:flex;
justify-content:space-between
padding:20px 40px
`
export const ActionsLabel = styled.div`
  width: 28px;
  padding: 1px;
  text-align: center;
  background: #33bb40;
  font-size: 14px;
  border-radius: 3px;
  margin-left: 10px;
  font-family: Bold;
  margin-top: 0px;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-top: -1px;
  }
`

export const WhiteArrow = styled.img`
  margin-left: 40px;
  transform: rotate(180deg) translateY(-5px);
`

export const NavBarImgCont = styled.div`
  cursor: pointer;
`

export const WhiteArrowDown = styled.img`
  margin-left: 10px;
`

export const LinkStyle = {
  color: colors.white,
  fontSize: '14px',
  padding: '0 10px',
  cursor: 'pointer',
  fontFamily: 'Bold',
  display: 'flex',
  textDecoration: 'none',
}

export const LinkStyleMobile = {
  color: colors.white,
  fontSize: '10px',
  padding: '0 10px',
  cursor: 'pointer',
  fontFamily: 'Bold',
  display: 'flex',
  textDecoration: 'none',
}

export const OrgSwitch = styled.div`
  display: flex;
  position: relative;
`
export const OrgSwitchImg = styled.img`
  height: 30px;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 45px;
  }
`
export const OrgSwitchIcon = styled.img`
  height: 12px;
  margin-top: 9px;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-top: 17px;
  }
`
export const OrgSwitchText = styled.p`
  font-family: Regular;
  text-transform: Capitalize;
  font-size: 14px;
  color: ${colors.white};
  margin: 6px 10px;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 18px;
    margin: 12px;
  }
`
export const SwitchAreaHead = styled.div`
  font-family: Bold;
  text-transform: Uppercase;
  font-size: 14px;
  color: ${colors.white};
  padding: 30px 20px 20px 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 18px;
    padding: 20px 20px 10px 20px;
  }
`
export const SwitchAreaList = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  transition: all 0.3s;
  &:hover {
    background: ${colors.greyButton};
  }
`
