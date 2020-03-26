import styled from 'styled-components'
import { colors, screenSizes } from '../../../../shared/styles/theme'
import { rgba } from 'polished'
import { Button } from '../../../../shared/components/button/button'

export const UserDetailsCont = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  text-align: center;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-top: 70px;
    flex-direction: row;
    text-align: left;
  }
`

export const UserProfilePhotoCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const UserProfilePhoto = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
`

export const DefaultUserProfilePhoto = styled.div`
  width: 117px;
  height: 117px;
  color: ${colors.white};
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.green2};
  text-transform: uppercase;
`

export const UserDetails = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const UserName = styled.div`
  font-size: 32px;
  line-height: 44px;
  color: ${colors.white};
  font-family: Regular;
`

export const UserEmail = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${colors.white};
  margin-top: 5px;
  font-family: Regular;
`

export const UserPosition = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-top: 3px
  color: ${colors.white};
  font-family:Light

`

export const UserShareGraph = styled.div`
  margin-left: auto;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledGraph = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  svg {
    height: 117px;
    width: 117px;
  }
`

export const GraphInfoCont = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`

export const GraphInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  line-height: 16px;
  margin: 5px 0;
  font-family: Regular;
`

interface CircleDotProps {
  backgroundColor: string
}

export const CircleDot = styled.div<CircleDotProps>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${props => props.backgroundColor};
`

export const UserShareInfoCont = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction: row;
  }
`

export const UserSharedetails = styled.div`
  padding: 20px 0 30px 0;
  background-color: ${colors.grey2};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 15px;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 24.25%;
    margin-bottom: 0px;
  }
`

export const Amount = styled.div`
  font-weight: 300;
  font-size: 48px;
  line-height: 65px;
  font-family: Light;
`
export const AmountValue = styled.span<any>`
  opacity: ${props => (props.opacity ? props.opacity : 1)};
`

export const Desc = styled.div`
  margin-top: 9px;
  font-size: 16px;
  line-height: 22px;
  opacity: 0.4;
  text-transform: capitalize;
  font-family: Light;
`
export const ShareAndRecentActionCont = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction: row;
  }

`

export const ShareAndRecentAction = styled.div`
  width: 100%;
  padding: 24px;
  background-color: ${colors.grey2};
  border-radius: 4px;
  overflow: auto;
  font-family:Regular
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 49.5%;
  }
`


export const MaxArea = styled.div`
max-width: 290px;
overflow: auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    max-width: 100%;
    overflow: hidden;
  }
`


export const RecentActionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
`
export const RecentAction = styled.td`
  font-weight: bold;
`
export const RecentActionDate = styled.td`
  text-align: right;
`
export const ShareAndRecentTitle = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 22px;
  color: ${colors.white};
  font-family: Light;
`

export const TeamMemberTables = styled.table`
  width: 600px;
  border-collapse: collapse;
  margin-bottom: 35px;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 100%;
  }
  font-family:light thead:after {
    content: '-';
    display: block;
    line-height: 1em;
    color: transparent;
  }

  thead tr {
    border-top: 2px solid ${rgba(colors.white, 0.1)};
    border-bottom: 2px solid ${rgba(colors.white, 0.1)};
  }

  thead tr td {
    color: ${colors.white};
    padding: 22px 1rem;
    font-weight: 800;
    font-size: 15px;
    line-height: 0px;
    font-family: Bold;
  }

  tbody tr {
    width: 100%;
  }

  tbody tr td[data-type='certificate-id'] {
    color: ${colors.green2};
    cursor: pointer;
    text-decoration: underline;
  }

  tbody tr:nth-child(odd) {
    background-color: ${colors.grey4};
  }

  tbody tr td {
    padding: 1rem;
    font-size: 16px;
    line-height: 16px;
    color: ${colors.white};
  }

  tbody tr td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  tbody tr td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export const ExercisedOption = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.grey2};
  border-radius: 4px;
  color: ${colors.white};
`
export const AvailableShare = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-family: Regular;
`
export const ExerciseStockOption = styled(Button)`
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 14px;
  line-height: 17px;
  border-radius: 2px;
  padding: 18px;
  font-family: Regular;
`

export const SwitchDotsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

interface SwitchDotsProps {
  key: number
  active: boolean
  onClick: (k: number) => void
}

export const SwitchDots = styled.div<SwitchDotsProps>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? colors.green3 : rgba(colors.white, 0.2))};
  border-radius: 50%;
  transition: 300ms background-color;

  :hover {
    background-color: ${colors.green3};
  }
`
export const TeamMemberProfilePage = styled.div`
  padding: 0 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 0 80px;
  }
`

export const MembersOrgButton = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 2px;
  padding: 8px 1rem;
  border-radius: 2px;
  font-family:Regular
  margin: 10px auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 20px 10px 0 0;
  }
`