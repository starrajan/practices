import * as React from 'react'
import { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
// import { ServiceContext } from '@modules/app/app'
// import { getOrganizationDashboard, getOrganizationCapital, getCapTableData } from '@logic'
import { DashboardScreenContainer, DashboardScreenContent, DashboardScreenHead, CapTableAndRecentActions, TableAndActions } from './style'
import { OrganizationCapTable, OrganizationInfo, OrganizationCapital, OrganizationRecentActions } from './components'
// import { DisplayToastDispatch, Service } from '@logic'
// import { HttpError } from '@service/http-client'
// import Cookies from 'universal-cookie'
// const cookies = new Cookies()

interface Props {
  // service: Service
  history: History
  // displayToast: DisplayToastDispatch
  match: any
}

const Dashboard = (props: Props) => {
  const [orgInfo, setOrgInfo] = useState<any>({})
  const [capitalInfo, setCapitalInfo] = useState<any>({})
  const [capTableData, setCapTableData] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [totalManager, setTotalmanager] = useState(0)
  // const { service } = props
  useEffect(() => {
    setLoading(false)
  }, [])

  // const handleOrgData = async () => {
  //   try {
  //     const orgInfoData = await service.getOrganizationDashboard(props.match.params.organizationId)
  //     if (orgInfoData) {
  //       setOrgInfo(orgInfoData)
  //     }
  //   } catch (err) {}
  // }
  // const handleCapitalInfoData = async () => {
  //   try {
  //     const capitalInfoData = await service.getOrganizationCapital(props.match.params.organizationId)
  //     if (capitalInfoData) {
  //       setCapitalInfo(capitalInfoData)
  //       getTotalmembers(capitalInfoData)
  //     }
  //   } catch (err) {}
  // }
  // const handleCapTableDataList = async () => {
  //   try {
  //     const capTableDataList = await service.getCapTableData(props.match.params.organizationId)
  //     if (capTableDataList) {
  //       setCapTableData(capTableDataList)
  //       setLoading(false)
  //     }
  //   } catch (err) {
  //     setLoading(false)
  //   }
  // }

  // const getTotalmembers = (capitalInfo: any) => {
  //   let managerCount = 0
  //   if (capitalInfo && capitalInfo.roles) {
  //     for (const ele of capitalInfo.roles) {
  //       if (ele.role === '15a29248-e47f-11e9-81b4-2a2ae2dbcce4') {
  //         managerCount = managerCount + 1
  //       }
  //     }
  //     setTotalmanager(managerCount)
  //   }
  // }

  const [recentActions, setRecentActions] = useState([])
  if (loading) {
    return <div>Loading....</div>
  }
  return (
    <DashboardScreenContainer>
      <DashboardScreenContent>
        <DashboardScreenHead>
          <div className="dashboard">Dashboard</div>
          <div className="org-name">Cognition, Inc </div>
        </DashboardScreenHead>
        <OrganizationCapital capitalInfo={capitalInfo && capitalInfo.shareholding} totalShares={orgInfo && orgInfo.totalShares} />
        <CapTableAndRecentActions>
          <TableAndActions>
            <OrganizationCapTable />
          </TableAndActions>
          <TableAndActions>
            <OrganizationRecentActions recentActions={recentActions} />
          </TableAndActions>
        </CapTableAndRecentActions>
        <OrganizationInfo
          registeredState={orgInfo.businessAddress && orgInfo.businessAddress.province}
          agentName={orgInfo.agent && orgInfo.agent.name}
          agentAddress={orgInfo.agent && orgInfo.agent.address}
          memberHeldShares={capitalInfo.shareholding && capitalInfo.shareholding.totalShares}
          structureType="Member Managed"
          numberOfManagers={totalManager}
          bankName={orgInfo.bankAccount && orgInfo.bankAccount.bankName}
          anNumber={orgInfo.bankAccount && orgInfo.bankAccount.accountNumber}
          rnNumber={orgInfo.bankAccount && orgInfo.bankAccount.registeredNumber}
          einNumber={orgInfo.einNumber}
        />
      </DashboardScreenContent>
    </DashboardScreenContainer>
  )
}

export default Dashboard

// const DashboardScreenWithService = (props: Props) => (
//   <ServiceContext.Consumer>{service => <Dashboard {...props} service={service} />}</ServiceContext.Consumer>
// )
// export default connect(
//   null,
//   {  }
// )(withRouter(DashboardScreenWithService as any))
