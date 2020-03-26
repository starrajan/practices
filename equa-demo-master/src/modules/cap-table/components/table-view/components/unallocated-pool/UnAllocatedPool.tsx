import * as React from 'react'
import { useState } from 'react'
import { TableViewWrapper, StyledCapTable } from '../../style'
import { styledCurrency } from 'shared/components/styled-currency'
import ReactTable from 'react-table'

const UnAllocatedPool = (props: any) => {
  const [unallocatedData, setUnAllocateddata] = useState([
    {
      fullName: 'Elsie Blankenship',
      exercisePrice: 0.1,
      expirationDate: '6/25/2020',
      exercised: 2500000,
      available: 0,
      totalShares: 2500000,
      fullyDiluted: 2.5,
    },
    {
      fullName: 'Aalia Romero',
      exercisePrice: 0.1,
      expirationDate: '8/19/2020',
      exercised: 100000,
      available: 150000,
      totalShares: 2500000,
      fullyDiluted: 2.5,
    },
    {
      fullName: 'Reef Sharp',
      exercisePrice: 0.1,
      expirationDate: '4/30/2021',
      exercised: 0,
      available: 2500000,
      totalShares: 2500000,
      fullyDiluted: 2.5,
    },
  ])

  const renderTableHeading = (heading: any) => {
    return <div style={{ textTransform: 'uppercase' }}>{heading}</div>
  }
  return (
    <ReactTable
      data={unallocatedData}
      columns={[
        {
          Header: <div style={{ marginLeft: '33px' }}>{renderTableHeading('MEMBER')}</div>,
          accessor: 'fullName',
          Cell: row => (
            <div className="unallocated-member-name">
              <div>{row.value}</div>
            </div>
          ),
          width: 250,
        },
        {
          Header: renderTableHeading(`Exercise price`),
          accessor: 'exercisePrice',
          Cell: row => (
            <div>
              <div className="exercise-price">${styledCurrency(row.value)}</div>
            </div>
          ),
          width: 227,
        },

        {
          Header: renderTableHeading('Expiration Date'),
          accessor: 'expirationDate',
          Cell: row => (
            <div className="text-right-align">
              <div>{row.value}</div>
            </div>
          ),
        },
        {
          Header: renderTableHeading('Exercised'),
          accessor: 'exercised',
          Cell: row => (
            <div className="text-right-align">
              <div>{row.value.toLocaleString()}</div>
            </div>
          ),
        },
        {
          Header: renderTableHeading('Available'),
          accessor: 'available',
          Cell: row => (
            <div className="text-right-align">
              <div>{row.value.toLocaleString()}</div>
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
    />
  )
}

export default UnAllocatedPool
