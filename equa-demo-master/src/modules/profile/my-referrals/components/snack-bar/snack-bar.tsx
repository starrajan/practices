import * as React from 'react'
import styled from 'styled-components'

interface SnackBarEleProps {
  show: boolean
}

const SnackBarEle = styled.div<SnackBarEleProps>`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  min-width: 250px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 123;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  font-size: 17px;
`

interface Props {
  message: string
  show: boolean
}

class SnackBar extends React.Component<Props> {
  render() {
    const { message, show } = this.props

    return <SnackBarEle show={show}>{message}</SnackBarEle>
  }
}

export default SnackBar
