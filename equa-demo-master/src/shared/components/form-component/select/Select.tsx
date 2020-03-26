import * as React from 'react'
import { Field } from 'formik'
import { SelectContainer, InputLabel, inputStyleFilled } from '../style'

interface LabelValue {
  label: string
  value: number
}
const Select = (props: any) => {
  const { name, options, defaultOption, label, labelOpacity, readOnly } = props
  return (
    <SelectContainer>
      <InputLabel labelOpacity={labelOpacity}>{label ? label : ''}</InputLabel>
      <Field name={name} as="select" required style={inputStyleFilled} disabled={readOnly}>
        {options ? (
          <>
            {defaultOption && <option value="">{defaultOption}</option>}
            {options.map((option: string | LabelValue, index: number) => {
              return (
                <option value={typeof option !== 'string' ? option.value : option} key={index}>
                  {typeof option !== 'string' ? option.label : option}
                </option>
              )
            })}
          </>
        ) : (
          <> {props.children} </>
        )}
      </Field>
    </SelectContainer>
  )
}

export default Select
