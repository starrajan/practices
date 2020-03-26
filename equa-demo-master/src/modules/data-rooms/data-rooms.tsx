import * as React from 'react'
import {
  Container,
  DataRoomHeading,
  HeadingText,
  CreateDataRoomBtn,
  Divider,
  TableContainer,
  DataRoomTable,
  DataRoomName,
  SideContent,
  Dots,
} from './style'
import BackArrow from '../../assets/image/arrow.png'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'
const { useState } = React

const DataRooms = () => {
  const [dataRoom] = useState([
    {
      name: 'Convertable Promissory Note',
      created: '2019/5/19',
      access: 3,
      documents: 4,
    },
    {
      name: 'Series A',
      created: '2019/5/19',
      access: 2,
      documents: 5,
    },
    {
      name: 'General Corporate Legal Review',
      created: '2019/5/19',
      access: 1,
      documents: 6,
    },
    {
      name: 'Series B',
      created: '2019/5/19',
      access: 5,
      documents: 9,
    },
    {
      name: 'CPAs and Accountants',
      created: '2019/5/19',
      access: 3,
      documents: 4,
    },
  ])

  const handleArrowClick = () => {
    history.goBack()
  }

  const goToDataRoom = () => {
    history.push(`${Paths.dataRoom}/1`)
  }

  const goToCreateDataRoom = () => {
    history.push(Paths.createDataRoom)
  }

  const renderTable = () => {
    return (
      <DataRoomTable>
        <thead>
          <tr>
            <th>name</th>
            <th>created</th>
            <th>documents</th>
            <th>access</th>
          </tr>
        </thead>
        <tbody>
          {dataRoom.map((v, k) => (
            <tr key={k}>
              <DataRoomName onClick={goToDataRoom}>{v.name}</DataRoomName>
              <td>{v.created}</td>
              <td>{v.documents}</td>
              <td>
                <SideContent>
                  <div>{v.access}</div>

                  <div>
                    <Dots />
                    <Dots />
                    <Dots />
                  </div>
                </SideContent>
              </td>
            </tr>
          ))}
        </tbody>
      </DataRoomTable>
    )
  }

  return (
    <React.Fragment>
      <Container>
        <DataRoomHeading>
          <HeadingText>
            <div onClick={handleArrowClick}>
              <img src={BackArrow} alt="BackArrow" />
            </div>
            Data Rooms
          </HeadingText>
          <CreateDataRoomBtn onClick={goToCreateDataRoom}>Create data room</CreateDataRoomBtn>
        </DataRoomHeading>
      </Container>
      <Divider />
      <Container>
        <TableContainer>{renderTable()}</TableContainer>
      </Container>
    </React.Fragment>
  )
}

export default DataRooms
