import * as React from 'react'
import { useState } from 'react'
import { SnapshotContainer, SelectDate, PrintButton } from './style'
import PrintImg from 'assets/image/print-img.svg'

const CapTableSnapshot = (props: any) => {
  const [selectedDate, setSelectedDate] = useState('8/20/2019')

  const onSelectDate = (e: any) => {
    setSelectedDate(e.target.value)
  }
  const capTableDate = [
    { label: '8/20/2019', value: '8/20/2019' },
    { label: '4/20/2019', value: '4/20/2019' },
    { label: '2/20/2019', value: '2/20/2019' },
  ]
  return (
    <SnapshotContainer>
      <SelectDate onChange={onSelectDate} value={selectedDate}>
        {capTableDate.map((v: any, k: any) => {
          return (
            <option key={k} value={v.value}>
              {`Snapshot: Current (${v.label})`}
            </option>
          )
        })}
      </SelectDate>
      <PrintButton>
        <img src={PrintImg} alt="" />
        <span>print cap table</span>
      </PrintButton>
    </SnapshotContainer>
  )
}

export default CapTableSnapshot
