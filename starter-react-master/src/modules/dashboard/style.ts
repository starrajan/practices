import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DashBoardContainer = styled.div`
  margin-top: 80px;
  display: flex;
`
export const Title = styled.div`
  font-size: 32px;
  color: white;
`

export const EmployeeList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  background: #2d6cca;
  padding: 20px;
  border: 2px solid black;
`
export const DataFromApi = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  background: #e0ffff;
  padding: 20px;
  margin-left: 100px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
`

export const EmployeeName = styled.div`
  font-size: 24px;
  color: white;
  width: 300px;
  margin: 20px;
`
