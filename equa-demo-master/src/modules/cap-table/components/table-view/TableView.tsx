import * as React from 'react'
import { useState, useEffect } from 'react'
import ReactTable from 'react-table'
import { TableContainer, TableViewWrapper, StyledCapTable, CapTableImg, ShareChartColor } from './style'
import CapTabArrow from 'assets/image/captable-arrow.png'
import { styledCurrency } from 'shared/components/styled-currency'
import ShareHolderChart from '../shareholder-chart'
import { UnAllocatedPool, TotalShares } from './components'

const colorsList = ['#F29D4A', '#EB5757', '#9B51E0', '#56CCF2', '#27AE60', '#F2C94C', '#2F80ED', '#FFFFFF']

const total = {
  capContribution: 1110000.0,
  totalCommon: 8250000,
  totalPreferred: 1000000,
  totalOptions: 750000,
  totalShares: 10000000,
}
const TableView = (props: any) => {
  const [showUnAllocatedPool, setShowUnAllocatedPool] = useState(false)
  const [shareholders, setShareholders] = useState([
    {
      fullName: 'Mike Johnson',
      capitalContribution: 40000,
      common: 4000000,
      preferred: 0,
      options: 0,
      totalShares: 4000000,
      fullyDiluted: 40,
      showCertificates: false,
      certificates: [{ id: 100, shareType: 1, shares: 4000000, capitalContribution: 40000, certificateNum: 'C-1' }],
    },
    {
      fullName: 'Darcy Prince',
      capitalContribution: 20000,
      common: 2000000,
      preferred: 0,
      options: 0,
      totalShares: 2000000,
      fullyDiluted: 20,
      showCertificates: false,
      certificates: [{ id: 101, shareType: 1, shares: 2000000, capitalContribution: 20000, certificateNum: 'C-2' }],
    },
    {
      fullName: 'Dario Shea',
      capitalContribution: 15000,
      common: 1500000,
      preferred: 0,
      options: 0,
      totalShares: 1500000,
      fullyDiluted: 15,
      showCertificates: false,
      certificates: [{ id: 102, shareType: 1, shares: 1500000, capitalContribution: 15000, certificateNum: 'C-3' }],
    },
    {
      fullName: 'Investment Holdings, LLC',
      capitalContribution: 1000000,
      common: 0,
      preferred: 1000000,
      options: 0,
      totalShares: 1000000,
      fullyDiluted: 10,
      showCertificates: false,
      certificates: [{ id: 103, shareType: 2, shares: 1000000, capitalContribution: 1000000, certificateNum: 'P-1' }],
    },
    {
      fullName: 'Elsie Blankenship',
      capitalContribution: 25000,
      common: 250000,
      preferred: 0,
      options: 250000,
      totalShares: 500000,
      fullyDiluted: 5,
      showCertificates: false,
      certificates: [{ id: 104, shareType: 3, shares: 250000, capitalContribution: 25000, certificateNum: 'O-1' }],
    },
    {
      fullName: 'Aalia Romero',
      capitalContribution: 10000,
      common: 250000,
      preferred: 0,
      options: 100000,
      totalShares: 350000,
      fullyDiluted: 3.5,
      showCertificates: false,
      certificates: [{ id: 105, shareType: 3, shares: 100000, capitalContribution: 10000, certificateNum: 'O-2' }],
    },
    {
      fullName: 'Reef Sharp',
      capitalContribution: 0,
      common: 250000,
      preferred: 0,
      options: 0,
      totalShares: 250000,
      fullyDiluted: 2.5,
      showCertificates: false,
      certificates: [{ id: 105, shareType: 3, shares: 250000, capitalContribution: 0, certificateNum: 'C-4' }],
    },
    {
      fullName: 'Unallocated Options Pool',
      capitalContribution: 0,
      common: 0,
      preferred: 0,
      options: 400000,
      totalShares: 400000,
      fullyDiluted: 4,
      showCertificates: false,
      unAllocatedPool: true,
    },
  ])
  const renderTableHeading = (heading: any) => {
    return <div style={{ textTransform: 'uppercase' }}>{heading}</div>
  }
  const handleShowCertificates = (data: any) => {
    const newShareHolderList = shareholders
    newShareHolderList[data].showCertificates = !newShareHolderList[data].showCertificates
    setShareholders([...newShareHolderList])
    if (shareholders[data].showCertificates && shareholders[data].unAllocatedPool) {
      setShowUnAllocatedPool(true)
    }
    if (!shareholders[data].showCertificates && shareholders[data].unAllocatedPool) {
      setShowUnAllocatedPool(false)
    }
  }
  const renderCertificateNum = (certificates: any) => {
    if (certificates) {
      return certificates.map((v: any, k: any) => {
        return (
          <div key={k} id={v.id} className="certificate-type">
            {v.certificateNum}
          </div>
        )
      })
    }
  }
  const renderPricePerShare = (certificates: any) => {
    if (certificates)
      return certificates.map((v: any, k: any) => {
        return (
          <div key={k} className="share-display">
            ${(v.capitalContribution / v.shares).toFixed(2).toLocaleString()}/share
          </div>
        )
      })
  }
  const renderEachCommonShare = (certificates: any) => {
    if (certificates)
      return certificates.map((v: any, k: any) => {
        return (
          <div key={k} className="share-display">
            {v.shareType === 1 ? v.shares.toLocaleString() : 0}
          </div>
        )
      })
  }
  const renderEachPreferredShare = (certificates: any) => {
    if (certificates)
      return certificates.map((v: any, k: any) => {
        return (
          <div key={k} className="share-display">
            {v.shareType === 2 ? v.shares.toLocaleString() : 0}
          </div>
        )
      })
  }
  const renderEachOptionsShare = (certificates: any) => {
    if (certificates)
      return certificates.map((v: any, k: any) => {
        return (
          <div key={k} className="share-display">
            {v.shareType === 3 ? v.shares.toLocaleString() : 0}
          </div>
        )
      })
  }

  return (
    <TableContainer>
      <ShareHolderChart colorsList={colorsList} shareholders={shareholders} />
      <TableViewWrapper>
        <StyledCapTable>
          <ReactTable
            data={shareholders}
            columns={[
              {
                Header: <div style={{ marginLeft: '33px' }}>{renderTableHeading('MEMBER')}</div>,
                accessor: 'fullName',
                Cell: row => (
                  <div className="member-name">
                    <ShareChartColor color={colorsList[row.index]} />
                    <div className="arrow-div">
                      <CapTableImg src={CapTabArrow} shouldRotate={row.original.showCertificates} />
                    </div>
                    <div>
                      <div>{row.value}</div>
                      {row.original.showCertificates && renderCertificateNum(row.original.certificates)}
                    </div>
                  </div>
                ),

                width: 250,
              },
              {
                Header: renderTableHeading(`Capital Contribution`),
                accessor: 'capitalContribution',
                Cell: row => (
                  <div>
                    <div>${styledCurrency(row.value)}</div>
                    {row.original.showCertificates && renderPricePerShare(row.original.certificates)}
                  </div>
                ),
                width: 227,
              },

              {
                Header: renderTableHeading('COMMON'),
                accessor: 'common',
                Cell: row => (
                  <div className="text-right-align">
                    <div>{row.value.toLocaleString()}</div>
                    {row.original.showCertificates && renderEachCommonShare(row.original.certificates)}
                  </div>
                ),
              },
              {
                Header: renderTableHeading('PREFERRED'),
                accessor: 'preferred',
                Cell: row => (
                  <div className="text-right-align">
                    <div>{row.value.toLocaleString()}</div>
                    {row.original.showCertificates && renderEachPreferredShare(row.original.certificates)}
                  </div>
                ),
              },
              {
                Header: renderTableHeading('OPTIONS'),
                accessor: 'options',
                Cell: row => (
                  <div className="text-right-align">
                    <div>{row.value.toLocaleString()}</div>
                    {row.original.showCertificates && renderEachOptionsShare(row.original.certificates)}
                  </div>
                ),
              },
              {
                Header: renderTableHeading(`TOTAL-SHARES`),
                accessor: 'totalShares',
                Cell: row => <div className="align-to-top">{row.value.toLocaleString()}</div>,
              },
              {
                Header: renderTableHeading('FD %'),
                accessor: 'fullyDiluted',
                Cell: row => (
                  <div className="align-right-to-top">
                    <div>{row.value.toFixed(2)}%</div>
                  </div>
                ),
              },
            ]}
            showPagination={false}
            minRows={0}
            resizable={false}
            sortable={false}
            getTrProps={(state: any, rowInfo: any) => {
              if (rowInfo && rowInfo.row) {
                return {
                  onClick: (e: any) => {
                    handleShowCertificates(rowInfo.index)
                  },
                }
              }
            }}
          />
          {showUnAllocatedPool && <UnAllocatedPool />}
          <TotalShares total={total} />
        </StyledCapTable>
      </TableViewWrapper>
    </TableContainer>
  )
}

export default TableView
