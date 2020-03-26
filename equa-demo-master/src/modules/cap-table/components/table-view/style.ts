import styled from 'styled-components'
import { StyledTable } from 'shared/components/styledTable'
import { screenSizes } from 'shared/styles/theme'

export const TableContainer = styled.div`
  margin-right: 10px;
`
export const TableViewWrapper = styled.div`
  overflow-x: scroll;
  @media (min-width: ${screenSizes.mediaL}px) {
    overflow: hidden;
  }
`
export const StyledCapTable = styled(StyledTable)`
  .ReactTable .-pagination {
    position: relative;
    border-top: 0;
  }
  .ReactTable .-pagination .-pageSizeOptions {
    margin: 3px 10px;
    position: absolute;
    :before {
      cursor: initial;
      content: 'showing:';
    }
    select {
      margin-bottom: 0;
    }

    @media (min-width: ${screenSizes.mediaL}px) {
      bottom: 5px;
      left: 100px;
    }
  }
  .ReactTable .rt-thead {
    .rt-th {
      display: flex;
      justify-content: flex-end;
      font-weight: 800;
      font-size: 10px;
      @media (min-width: ${screenSizes.mediaL}px) {
        font-size: 15px;
        line-height: 20px;
      }
    }
    .rt-th:first-child {
      display: flex;
      justify-content: flex-start;
    }
    .rt-th:last-child {
      padding-right: 30px;
    }
  }

  .ReactTable .rt-thead.-header {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .ReactTable .rt-tbody {
    font-size: 12px;
    .rt-tr.-odd {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 4px;
    }

    .rt-td {
      all: unset;
      text-align: right;
      padding: 17px 0 18px 0;
      box-sizing: border-box;
      position: relative;
    }
    .rt-td:first-child {
      text-align: left;
    }
    .rt-td:last-child {
      padding-right: 30px;
    }
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 16px;
    }
  }

  .ReactTable .rt-tfoot {
    font-size: 12px;
    margin-bottom: 30px;
    min-height: 100px;
    .rt-td {
      text-align: right;
      border-right: 0px;
      padding: 17px 0 18px 0;
    }
    .footer-border {
      margin: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 16px;
    }
  }

  .align-to-top {
    position: absolute;
    top: 17px;
    right: 0;
  }
  .align-right-to-top {
    position: absolute;
    top: 17px;
    right: 30px;
  }

  .total-text {
    display: flex;
    margin-left: 40px;
    font-weight: 800;
    font-size: 12px;
    padding: 1px 0;
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 15px;
    }
  }

  .member-name {
    display: flex;
    margin-left: 10px;
  }

  .text-right-align {
    text-align: right;
  }

  .certificate-type {
    color: #33bb40;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 16px;
  }

  .certificate-without-img {
    margin-top: 16px;
  }

  .share-display {
    margin-top: 16px;
  }
  .total-fd-percentage {
    margin-right: 30px;
  }
  .exercise-price {
    padding-right: 5px;
  }
  .unallocated-member-name {
    margin-left: 37px;
  }
  span {
    opacity: 0.4;
  }

  .arrow-div {
    margin: 0 7px;
  }

  .active-down-arrow {
    display: none;
  }

  .active-down-arrow-flipped {
    transform: rotate(180deg);
    display: none;
  }

  .-sort-desc {
    .active-down-arrow {
      display: none;
    }

    .inactive-up-arrow {
      display: none;
    }

    .active-down-arrow-flipped {
      display: block;
    }

    .inactive-down-arrow {
      display: block;
    }
  }

  .-sort-asc {
    .active-down-arrow {
      display: block;
    }

    .inactive-up-arrow {
      display: block;
    }

    ..active-down-arrow-flipped {
      display: none;
    }

    .inactive-down-arrow {
      display: none;
    }
  }
`

export const CapTableImg = styled.img<any>`
  width: 8px;
  height: 8px;
  cursor: pointer;
  transform: ${props => (props.shouldRotate ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: 300ms;
`

export const TableColHead = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    margin-left: 5px;
    width: 8px;
    @media (min-width: ${screenSizes.mediaL}px) {
      margin-left: 10px;
      width: auto;
    }
  }

  .arrow-collection {
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 4px;
    }
  }
`
export const ShareChartColor = styled.div<any>`
  background-color: ${(props: any) => props.color && props.color};
  border-radius: 3px;
  width: 6px;
  height: 30px;
`
