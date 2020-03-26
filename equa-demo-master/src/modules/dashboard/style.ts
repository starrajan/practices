import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../shared/styles/theme'
import { Button } from '../../shared/components/button'


export const DashboardScreenContainer = styled.div`
  width: 100%;
`
export const DashboardScreenContent = styled.div`
  max-width: 1800px;
  margin: 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 0 60px;
  }
`
export const DashboardScreenHead = styled.div`
  margin-top: 35px;
  color: white;
  .dashboard {
    font-size: 32px;
    line-height: 44px;
  }
  .org-name {
    font-size: 16px;
    line-height: 22px;
    opacity: 0.6;
  }
`
export const CapTableAndRecentActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 25px 0;
    flex-direction: row;
  }
`
export const TableAndActions = styled.div`
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 48%;
    padding: 32px 24px 21px 28px;
    margin-bottom: 0;
  }
`
export const DashboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead:after {
    content: '-';
    display: block;
    color: transparent;
  }

  thead tr td {
    font-weight: 300;
    font-size: 16px;
    color: #ffffff;
    img {
      cursor: pointer;
    }
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 24px;
      line-height: 33px;
    }
  }
  thead tr td:last-child {
    padding-right: 8px;
    text-align: right;
    @media (min-width: ${screenSizes.mediaL}px) {
      padding-right: 26px;
    }
  }

  tbody tr {
    width: 100%;
  }

  tbody tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);
  }

  tbody tr td {
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    .no-data {
      color: black;
      font-size: 16px;
      font-weight: normal;
      text-align: center;
    }
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 16px;
      line-height: 16px;
      padding: 17px 26px 18px 22px;
      font-family: Regular;
    }
  }

  tbody tr td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  tbody tr td:last-child {
    text-align: right;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
export const NoAvailableData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 15% 15% 4% 15%;
  }
`
export const PlaceholderText = styled.div`
font-size: 18px;
line-height: 25px;
font-family:Light;
color:${colors.white}
opacity:0.8;
margin-top:30px
`

export const PlaceholderButton = styled.button`
background:${colors.green}
color:${colors.white}
font-size: 14px;
border-radius: 2px;
outline: none;
border: none;
cursor: pointer;
text-transform: uppercase;
padding: 10px 30px;
font-family: Bold;
height: 45px;
margin-top: 35px;

`