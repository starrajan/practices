import * as React from 'react'
import { Field } from 'formik'
import Select from 'react-select'

import { SelectContainer, customSelectStyles } from '../../style'
import SelectDownArrow from 'assets/image/select-down-arrow.svg'

const DropdownIndicator = () => {
  return <img src={SelectDownArrow} alt="" style={{ marginBottom: '8px' }} />
}
const MemberFormSelect = (props: any) => {
  const { name, options, placeholder, isMulti, isCountries, isStates } = props
  const defaultOption = !!options && !placeholder && options[0]
  const statesOptions: any = []
  if (isStates) {
    for (const item of options) {
      const option = { label: item, value: item }
      statesOptions.push(option)
    }
  }

  return (
    <SelectContainer>
      <Field name={name}>
        {({ field, form }: any) => {
          const onChange = (option: any) => {
            if (option) {
              if (isCountries) {
                form.setFieldValue(field.name, isMulti ? (option as any[]).map((item: any) => item.alpha3) : (option as any).alpha3)
              } else {
                form.setFieldValue(field.name, isMulti ? (option as any[]).map((item: any) => item.value) : (option as any).value)
              }
            } else {
              form.setFieldValue(field.name, isMulti ? [] : '')
            }
          }
          return (
            <Select
              options={isStates ? statesOptions : options}
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

export default MemberFormSelect
