import styled from 'styled-components'
import { colors, screenSizes } from '../../shared/styles/theme'
import { Button } from '../../shared/components/button/button'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export const TeamMemberContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 0 80px;
  }
`
export const MembersOrg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0 40px 0;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 0 20px;
    flex-direction: row;
  }
`
export const OrganizationName = styled.p`
font-size: 23px;
line-height: 29px;
  color: ${colors.white};
  font-family: Regular;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 32px;
    line-height: 44px;
  }
`
export const LinkText = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: ${colors.green};
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;

`

export const MembersOrgButton = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 2px;
  min-width: 184px;
  padding: 8.5px 1rem;
  border-radius: 2px;
  font-family:Regular
  margin: 10px auto;
  width: 80%;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 0 10px 0 0;
    width: 100%;
  }
`
export const LineSeparator = styled.div`
  border: 0.5px solid rgba(255, 255, 255, 0.1);
`

export const MemberContainer = styled.div`
  display: flex;
  align-items: center;
`

export const UserProfilePic = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`

export const DefaultUserProfilePic = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #33bb3f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;
`

export const MemberName = styled.span`
  margin-left: 13px;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  overflow: hidden;
`

export const ColumnHeading = styled.span`
  cursor: pointer;
  text-align: center;
  font-weight: 800;
  font-size: 15px;
`
export const DownArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

export const MemberSince = styled.div`
  width: 100%;
  text-align: right;
`
export const NameHeading = styled(ColumnHeading)`
  margin-left: 48px;
  display: flex;
  justify-content: flex-start;
`

export const RightAlignedColumnHeading = styled(ColumnHeading)`
  display: flex;
  justify-content: flex-end;
`
export const LeftAlignedColumnHeading = styled(ColumnHeading)`
  display: flex;
  justify-content: flex-start;
`

export const RightAlignedTextRow = styled.div`
  width: 100%;
  text-align: right;
`

export const MembersOrgButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 400px;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex-direction: row;
  }

`

export const TeamMembersTable = styled(ReactTable)`
  .ReactTable .rt-thead .rt-th {
    border-right: none;
  }
  .ReactTable .rt-tbody .rt-td {
    border-right: none;
  }
  .ReactTable {
    border: none;
  }
`

export const InviteContent = styled.div`
  padding: 20px;
  width: 290px;
  max-height: 500px;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 711px;
    max-height: 600px;
    overflow-x: auto;
    padding: 50px 50px 20px 50px;
  }
`
export const InviteContentTeam = styled.div`
  padding: 20px;
  width: 290px;
  max-height: 500px;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 711px;
    max-height: 100%;
    overflow-x: auto;
    padding: 50px 50px 20px 50px;
  }
`

export const UploadContent = styled.div`
  padding: 10px 50px 20px 50px;
  width: 290px;
  max-height: 300px;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 711px;
    max-height: 600px;
    overflow-x: auto;
  }
`

export const UploadImage = styled.img`
  width: 100%;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: auto;
   
  }
`


