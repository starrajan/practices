import * as React from 'react'

export const styledCurrency = (value: any) => {
  const currency = value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  const intValue = currency.split('.')[0]
  const decimalValue = currency.split('.')[1]
  return (
    <>
      {intValue}.<span>{decimalValue}</span>
    </>
  )
}
