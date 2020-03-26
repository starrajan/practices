import * as React from 'react'
import { StyledInput } from './style'
import { Field } from 'react-final-form'
// import { FieldErrors } from '@components/field-errors'

const InfoCollectionInput = (props: any) => {
  const { placeholder, ...inputProps } = props
  return (
    <Field
      name={props.name}
      // validate={validate}
      render={({ input, meta }) => (
        <StyledInput>
          <div>{props.label ? props.label : ''}</div>
          <input placeholder={placeholder} {...inputProps} {...input} />
          {/* <FieldErrors meta={meta} /> */}
        </StyledInput>
      )}
    />
  )
}

export default InfoCollectionInput
