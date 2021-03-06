import * as React from 'react'
import { Container, DashBoardContainer, Title, EmployeeList, EmployeeName, DataFromApi } from './style'
import { useHttpGet } from '../../service/global-service'

function DashBoard() {
  const [loading, data] = useHttpGet(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 150 + 1)}`, [])
  if (loading) {
    return <div style={{ marginTop: '100px' }}>Loading....</div>
  }
  return (
    <Container>
      <DashBoardContainer>
        <Title>RAPID INNOVATION EMPLOYEE LIST</Title>
        <EmployeeList>
          <EmployeeName>1 - SHAILESH</EmployeeName>
          <EmployeeName>2 - AMAR KANT</EmployeeName>
          <EmployeeName>3 - SIDDHART</EmployeeName>
          <EmployeeName>4 - AKSHIT</EmployeeName>
          <EmployeeName>5 - SHREYA</EmployeeName>
          <EmployeeName>6 - RAJAN</EmployeeName>
          <EmployeeName>7 - ARUNIMA</EmployeeName>
          <EmployeeName>8 - ADITYA</EmployeeName>
          <EmployeeName>9 - ATUL</EmployeeName>
        </EmployeeList>
        <div>
          {!!data && data.userId > 0 ? (
            <DataFromApi>
              <h1>API Test</h1>
              <div>{`ID - ${data.id}`}</div>
              <div>{`USERID - ${data.userId}`}</div>
              <div>{`COMPLETED - ${data.completed ? true : false}`}</div>
              <div>{`TITLE - ${data.title}`}</div>
            </DataFromApi>
          ) : null}
        </div>
      </DashBoardContainer>
    </Container>
  )
}

export default DashBoard
