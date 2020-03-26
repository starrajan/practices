import * as React from 'react'
import { ExercisedOption, AvailableShare, ExerciseStockOption } from '../style'

interface Props {
  // issuedOptions: Array<any>
}

const PurchaseShareBlock = (props: Props) => {
  // const { issuedOptions } = props

    // const availableShare = issuedOptions.reduce((sum, share) => sum + share.shares, 0)
    return (
      <ExercisedOption>
        <AvailableShare>{`You have 150,000 shares available to purchase!`}</AvailableShare>
        <ExerciseStockOption> exercise stock option </ExerciseStockOption>
      </ExercisedOption>
    )

  return null
}

export default PurchaseShareBlock
