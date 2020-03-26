import styled from 'styled-components'
import { Container } from '../../../../../shared/styles/styled'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

export const WaitlistWrapper = styled.div`
  background-color: #212f3f;
  padding: 16px 0;
`

export const WaitlistContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  @media (max-width: ${screenSizes.mediaL}px) {
    flex-direction: column;
  }

  img {
    height: 28px;
    margin-right: 10px;
    @media (min-width: ${screenSizes.mediaL}px) {
      height: 100%;
    }
  }
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 5px;
  .num {
    font-weight: bold;
    font-size: 20px;
    color: #33bb40;
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 24px;
    }
  }
  .text {
    color: white;
    font-size: 12px;
    margin-left: 7px;
    font-family: Regular;
    text-transform: capitalize;
    font-weight: normal;
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 16px;
    }
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 0 0 0 15px;
  }
`

export const BehindStats = styled(Stats)`
  margin: 0 0 10px 0;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 0 30px 0 0px;
  }
`
// change back to 72px margin right when subscription put back in

export const MoveAhead = styled.div`
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.05em;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #70ce45;
  cursor: pointer;
  text-align: center;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 14px;
  }
`

export const VerticalLine = styled.div`
  height: 3px;
  width: 44px;
  margin: 24px 0;
  background: rgba(255, 255, 255, 0.5);
  transform: rotate(90deg);
  @media (max-width: ${screenSizes.mediaL}px) {
    transform: rotate(0deg);
    margin: 5px 0;
  }
`
