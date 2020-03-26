import * as React from 'react'
import { ModalBody, ModalContent, CloseModalBtnCont, CloseModalBtn } from './style'

import Close from '../../../../../assets/image/cross.png'


interface Props {
  show: boolean
  toggleModal: () => void
}

class Modal extends React.Component<Props> {
  render() {
    const { show, toggleModal } = this.props

    return (
      <ModalBody show={show}>
        <ModalContent>
          <CloseModalBtnCont>
            <CloseModalBtn type="button" onClick={toggleModal}>
              <img src={Close} />
            </CloseModalBtn>
          </CloseModalBtnCont>
          {this.props.children}
        </ModalContent>
      </ModalBody>
    )
  }
}

export default Modal
