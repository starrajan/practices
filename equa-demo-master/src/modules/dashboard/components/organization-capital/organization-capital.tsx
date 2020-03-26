import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { OrganizationCapitalCont, InfoDetails, Amount, Description, NoShareHoldingData } from './style'
interface Props extends RouteComponentProps<any> {
  capitalInfo: any
  totalShares: number
}

const OrganizationCapital = (props: Props) => {
  const { capitalInfo, totalShares } = props
  // if (!capitalInfo || Object.keys(capitalInfo).length <= 0) {
  //   return (
  //     <OrganizationCapitalCont>
  //     <InfoDetails>
  //       <Amount>0</Amount>
  //       <Description>Total Shareholders</Description>
  //     </InfoDetails>
  //     <InfoDetails>
  //       <Amount>0</Amount>
  //       <Description>Total Shares</Description>
  //     </InfoDetails>
  //     <InfoDetails>
  //       <Amount>0%</Amount>
  //       <Description>My Shares</Description>
  //     </InfoDetails>
  //     <InfoDetails>
  //       <Amount>$0</Amount>
  //       <Description>Total Cash Raised</Description>
  //     </InfoDetails>
  //   </OrganizationCapitalCont>
  //   )
  // }
  return (
    <OrganizationCapitalCont>
      <InfoDetails>
        <Amount>36</Amount>
        <Description>Total Shareholders</Description>
      </InfoDetails>
      <InfoDetails>
        <Amount>3,000,000</Amount>
        <Description>Total Shares</Description>
      </InfoDetails>
      <InfoDetails>
        <Amount>3.2%</Amount>
        <Description>My Shares</Description>
      </InfoDetails>
      <InfoDetails>
        <Amount>$30M</Amount>
        <Description>Total Cash Raised</Description>
      </InfoDetails>
    </OrganizationCapitalCont>
  )
}

export default withRouter(OrganizationCapital)
