import * as React from 'react'
import { Field } from 'formik'
import Select from 'react-select'

import { SelectContainer, InputLabel, customSelectStyles } from '../style'
import SelectDownArrow from 'assets/image/select-down-arrow.svg'

const DropdownIndicator = () => {
  return <img src={SelectDownArrow} alt="" style={{ marginBottom: '8px' }} />
}
const MultiSelect = (props: any) => {
  const { labelOpacity, label, name, options, placeholder, isMulti } = props
  const defaultOption = !!options && !placeholder && options[0]
  return (
    <SelectContainer>
      <InputLabel labelOpacity={labelOpacity}>{label}</InputLabel>
      <Field name={name}>
        {({ field, form }: any) => {
          const onChange = (option: any) => {
            if (option) {
              form.setFieldValue(field.name, isMulti ? (option as any[]).map((item: any) => item.value) : (option as any).value)
            } else {
              form.setFieldValue(field.name, isMulti ? [] : '')
            }
          }
          return (
            <Select
              options={options}
              isMulti={isMulti && isMulti}
              placeholder={placeholder}
              value={options ? options.find((option: any) => option.value === field.value) : ''}
              onChange={onChange}
              components={{ DropdownIndicator }}
              styles={customSelectStyles}
              defaultValue={defaultOption}
            />
          )
        }}
      </Field>
    </SelectContainer>
  )
}

export default MultiSelect
