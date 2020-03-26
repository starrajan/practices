import * as React from 'react'
import { Field, ErrorMessage } from 'formik'
import { err, InputLabel, inputStyleFilled, InputContainer } from '../style'

const Input = (props: any) => {
  const { readOnly, name, label, placeholder, type, labelOpacity } = props
  return (
    <InputContainer>
      <InputLabel labelOpacity={labelOpacity}>{label}</InputLabel>
      <Field style={inputStyleFilled} name={name} placeholder={placeholder} type={type ? type : 'text'} disabled={readOnly} />
      <ErrorMessage component={err} name={name} />
    </InputContainer>
  )
}
export default Input
