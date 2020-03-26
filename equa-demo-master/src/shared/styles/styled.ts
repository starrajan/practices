import styled, { css } from 'styled-components'
import { colors, screenSizes } from './theme'
import { rgba } from 'polished'
export const colorChangeDelay = '1s'
export const HeaderHeight = '80px'

export const MainContainer = styled.div`
  margin: 54px auto 0;
  max-width: 1224px;
  width: 100%;
`

export const Container = styled.div`
  max-width: 1224px;
  margin: auto;
  width: 100%;
`

export const StyledEllipses = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  > div:first-child {
    font-size: 22px;
    position: relative;
    > div {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px;
      background-color: white;
      border: 1px solid ${colors.greyLine};
    }
  }
`

export const StyledTermsBox = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  height: 400px;
  border: 1px solid ${rgba(colors.greyLine, 0.2)};
  color: ${colors.black};
`

export const FlexCol = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: ${props => (props.alignItems ? props.alignItems : 'initial')};
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`

export const FlexRow = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  color: ${props => (props.color ? props.color : colors.white)};
`

export const CenterContainer = styled.div`
  text-align: center;
`

export const RightContainer = styled.div`
  text-align: right;
`

export const StyledContent = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }
`

// TODO: Might need width: fit-content;
export const StyledH1 = styled.h1`
  color: ${(props: any) => (props.color ? props.color : colors.white)};
`

export const StyledH4 = styled.h4`
  margin: 0;
  color: ${(props: any) => (props.color ? props.color : colors.white)};
`

export const StyledH2 = styled.h2`
  color: ${(props: any) => (props.color ? props.color : colors.white)};
  text-align: start;
  font-size: 1.7em;
  font-weight: 100;
`

export const StyledH3 = styled.h3`
  color: ${(props: any) => (props.color ? props.color : colors.white)};
  text-align: start;
  padding: 20px;
`

export const PointedStyledH2 = styled(StyledH2)`
  cursor: pointer;
  margin: 0;
  float: left;
  width: fit-content;
`
export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 812px;
  margin: auto;
`

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    + div {
      margin-left: 10px;
    }
  }
`

export const GreyBlock = styled.div`
  background-color: ${colors.greyBackground};
  color: ${colors.white};
  border-radius: 4px;
  padding: 30px;
  margin-bottom: 40px;
  position: relative;
  p {
    font-size: 0.9em;
    color: ${colors.grey};
  }
`
