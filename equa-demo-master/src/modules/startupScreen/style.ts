import styled from 'styled-components'
import { colors, screenSizes } from '../../shared/styles/theme'
import { Button } from '../../shared/components/button/'
export const Container = styled.div`
  height: 100vh;
`
export const EquaStartHead = styled.div`
  color: ${colors.white};
  font-size: 24px;
  font-family: Regular;
  margin: 40px 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 40px 60px;
  font-size: 32px;
  }
`
export const StyledItem = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  max-width:${(props: any) => (props.isCompleted ? '800px;' : '600px')}
  width: 90%;
  position: relative;
  text-align: start;
  margin-top: 1.5rem;
  padding: 20px;
  background-color: ${(props: any) => (props.isCompleted ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)')};
  color: #ffffff;
  border-radius: 4px;
  cursor: ${(props: any) => (!props.pointed ? 'initial' : 'pointer')};
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: ${(props: any) => (props.currentStep === props.step ? `2px solid ${colors.secondary};` : '0')};
    -webkit-animation: ${(props: any) => (props.currentStep === props.step ? 'pulsate 1.5s ease-out' : 'none')};
    -webkit-animation-iteration-count: infinite;
  }

  @keyframes pulsate {
    0% {
      -webkit-transform: scale(1);
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(1.02, 1.2);
      opacity: 0;
    }
  }
  img {
    width: 38px;
    height: 38px;
  }
`

export const BlockIcon = styled.img`
  width: 48px;
  height: 48px;
`
export const CircleImage = styled.img<any>`
  width: 38px;
  height: 38px;
  opacity: ${(props: any) => (props.isCompleted ? 1 : 0.4)};
`
export const BlockInfo = styled.div<any>`
  flex: 1;
  max-width: ${(props: any) => (props.isCompleted ? '600px' : '392px')};
  color: ${(props: any) => (props.isCompleted ? ' #394E5B;' : '#ffffff')};
  .head-text {
    opacity: ${(props: any) => (props.isCompleted ? 1 : 0.6)};
    font-weight: bold;
    font-size: 18px;
  }
  .desc-text {
    opacity: ${(props: any) => (props.isCompleted ? 1 : 0.4)};
  }
  .upload-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .skip-text {
    opacity: ${(props: any) => (props.isCompleted ? 1 : 0.4)};
    border-bottom: 0.1px solid;
    margin-right: -30px;
  }
`
export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${screenSizes.mediaM}px) {
    > div {
      height: inherit;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      div {
        margin-left: 0;
        margin-top: 10px;
        text-align: center;
      }
      svg:nth-of-type(2) {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 15px;
      }
    }
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  width: 90%;
  max-width: 700px;
  justify-content: space-between;
  align-itmes: center;
  flex-direction: row;
  margin: 35px 0;
  @media (max-width: ${screenSizes.mediaM}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StartUpScreenBtn = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  width: 40%;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
`