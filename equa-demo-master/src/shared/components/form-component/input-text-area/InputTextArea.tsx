import * as React from 'react'
import { Field, ErrorMessage } from 'formik'
import { err, InputLabel, InputContainer, inputTextAreaStyleFilled } from '../style'

const InputTextArea = (props: any) => {
  const { name, label, placeholder, labelOpacity, value, height } = props
  const styles = {
    ...inputTextAreaStyleFilled,
    height
  }
  return (
    <InputContainer>
      <InputLabel labelOpacity={labelOpacity}>{label} </InputLabel>
      <Field style={styles} name="legendText" as="textarea" placeholder={placeholder} value={value && value} />
      <ErrorMessage component={err} name={name} />
    </InputContainer>
  )
}
export default InputTextArea
