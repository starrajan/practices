import * as React from 'react'
import { ShareAndRecentTitle,MaxArea } from '../style'
import { ShareTable } from './'

interface Props {
  outstandingShares: Array<any>
  issuedOptions: Array<any>
}

const ShareBlock = (props: Props) => {
  const { outstandingShares, issuedOptions } = props
  return (
    <MaxArea>
      {outstandingShares ? (
        <>
          <ShareAndRecentTitle>Outstanding Shares</ShareAndRecentTitle>
          <ShareTable data={outstandingShares} />
        </>
      ) : null}

      {issuedOptions ? (
        <>
          <ShareAndRecentTitle>Issued Options Available</ShareAndRecentTitle>
          <ShareTable data={issuedOptions} />
        </>
      ) : null}
    </MaxArea>
  )
}

export default ShareBlock