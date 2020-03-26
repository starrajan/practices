import styled from 'styled-components'
import { colors } from '../../shared/styles/theme'

export const Container = styled.div`
    max-width: 1264px;
    width: 90%;
    margin: 0 auto;
`

export const DataRoomHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 70px;
    padding-bottom: 38px;

    @media (max-width: 700px){
      flex-direction: column;
      align-items: center;
    }
`

export const CreateDataRoomBtn = styled.div`
    padding: 18px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.green};
    border-radius: 2px;
    font-family: Bold;
    font-size: 14px;
    letter-spacing: 2px;
    color: ${colors.white};
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 700px){
      margin-top: 20px;
    }
`

export const HeadingText = styled.div`
    font-size: 32px;
    color: ${colors.white};
    font-family: Regular;
    display: flex;
    align-items: center;
    
    div{
      padding-right: 29px;
      cursor: pointer;
    }
    div img {
      width: 16px;
      height: 13px;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: ${colors.checkMarkColor};
`

export const TableContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  overflow-x: auto;
  padding-bottom: 200px;
`
export const DataRoomTable = styled.table`
  width: 1264px;
  table-layout: fixed;
  color: ${colors.white};
  font-family: Regular;

  thead tr th {
    text-transform: uppercase;
    color: white;
    font-family: Bold;
    font-size: 15px;
    padding: 18px 22px;
  }

  thead tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  tbody tr td {
    padding: 18px 22px;
    font-family: Regular;
  }

  tbody:before {
    content: '-';
    display: block;
    line-height: 18px;
    color: transparent;
  }

  tbody tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);

    td:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    td:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

export const DataRoomName = styled.td`
  cursor: pointer;
`

export const SideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Dots = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${colors.white};
  margin-bottom: 3.5px;
`