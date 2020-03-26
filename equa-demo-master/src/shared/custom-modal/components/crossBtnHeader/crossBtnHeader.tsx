import * as React from 'react'
import { CancelModal, CancelModalBtn } from './style'
import CancelBtn from '../../../../assets/image/CrossSymbol.svg'

const CrossButtonHeader = (props: any) => {
  const { toggleModal } = props

  return (
    <CancelModal>
      <CancelModalBtn src={CancelBtn} alt="" onClick={() => toggleModal(false)} />
    </CancelModal>
  )
}
export default CrossButtonHeader
