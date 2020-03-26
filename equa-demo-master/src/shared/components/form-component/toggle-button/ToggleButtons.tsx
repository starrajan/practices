import * as React from 'react'
import { Field } from 'formik'
import { ToggleButtonsGroup, ToggleButton, ToggleButtonText } from './style'

const ToggleButtons = (props: any) => {
  const { items, name, vertical, horizontal } = props
  return (
    <ToggleButtonsGroup vertical={vertical} horizontal={horizontal}>
      <Field name={name}>
        {({ form, field }: any) => {
          const handleToggleButton = (e: any, itemValue: any) => {
            form.setFieldValue(field.name, itemValue)
          }
          return items.map((item: any, k: any) => {
            return (
              <div key={k}>
                <ToggleButton
                  type="button"
                  vertical={vertical}
                  horizontal={horizontal}
                  onClick={(e: any) => handleToggleButton(e, item.value)}
                  selected={field.value === item.value}
                >
                  <div>{item.logo ? item.logo : null}</div>
                  <ToggleButtonText selected={field.value === item.value}>{item.label}</ToggleButtonText>
                </ToggleButton>
              </div>
            )
          })
        }}
      </Field>
    </ToggleButtonsGroup>
  )
}

export default ToggleButtons
