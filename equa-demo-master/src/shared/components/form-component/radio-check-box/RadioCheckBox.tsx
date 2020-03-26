import * as React from 'react'
import { Formik, Field } from 'formik'

const RadioCheckBox = (props:any) => {
  return (
    <Field name={props.name}>
      {({ field, form }:any) => (
        <label>
          <input
            {...field}
            type="checkbox"
            checked={field.value.includes(props.value)}
            onChange={() => {
              const set = new Set(field.value)
              if (set.has(props.value)) {
                set.delete(props.value)
              } else {
                set.add(props.value)
              }
              field.onChange(field.name)(Array.from(set))
              form.setFieldTouched(field.name, true)
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  )
}

export default RadioCheckBox
