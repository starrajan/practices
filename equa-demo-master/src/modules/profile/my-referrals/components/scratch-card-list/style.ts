import styled from 'styled-components'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const NoTicketCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px;
  img {
    height: 110px;
    @media (min-width: ${screenSizes.mediaXL}px) {
      height: 100%;
    }
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 897px;
    margin: 0 79px 0px;
  }
`

export const TicketsCont = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px;
  .single-ticket-image {
    height: 250px;
    transform: scale(1);
    transition: all 0.3s;
    cursor:pointer;
  }
  .single-ticket-image:hover {
    transform: scale(1.1);
  }
  .single-ticket {
    position: relative;
    margin: 20px 10px;
  }

  .brown-scratch-box {
    width: 188px;
    height: 188px;
    position: absolute;
    top: 150px;
    left: 45.5px;
  }

  .result-box {
    height: 185px;
    width: 185px;
    border: 6px solid #2c3e50;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .amount {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 28px;
        height: 31px;
        margin-right: 5px;
      }

      span {
        margin-left: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        font-size: 45px;
        color: #3e3e3e;
      }
    }

    .equa-cash-text {
      font-weight: 800;
      font-size: 20px;
      color: #3e3e3e;
    }

    .equa-cash-value {
      margin-top: 12px;
      background: rgba(57, 78, 91, 0.46);
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      width: 122px;
      text-align: center;
      padding: 10px 0;
    }
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 700px;
    margin: 20px 50px;
  }
`
