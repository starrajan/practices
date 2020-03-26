import * as React from 'react'
import { Field } from 'formik'
import { AddressBlock } from '../style'
import Input from '../input'
import Select from '../select'
import { countries } from '../../../helpers/countries'
import { states } from '../../../helpers/states'

const Address = (props: any) => {
  const { name, readOnly } = props

  return (
    <div>
      <AddressBlock>
        <Select readOnly={readOnly} label="Country" name={`${name}.country`}>
          <option value="">Choose</option>
          {countries.map((country, index) => {
            return (
              <option value={country.alpha2} key={index}>
                {country.label}
              </option>
            )
          })}
        </Select>
      </AddressBlock>
      <AddressBlock>
        <Input label="Street Address" type="text" name={`${name}.streetAddress`} readOnly={readOnly} />
      </AddressBlock>
      <AddressBlock>
        <Field name={`${name}.country`} subscription={{ value: true }}>
          {({ meta }: any) => {
            return meta.value === 'US' ? (
              <Field
                name={`${name}.province`}
                disabled={readOnly}
                render={() => (
                  <>
                    <Select
                      readOnly={readOnly}
                      name={`${name}.province`}
                      label="Province"
                      defaultOption={'Choose a state'}
                      options={Object.keys(states)}
                    />
                  </>
                )}
              />
            ) : (
              <Field
                name={`${name}.state`}
                render={() => (
                  <Input name={`${name}.state`} component="input" label="State" placeholder={'Choose a state'} readOnly={readOnly} />
                )}
              />
            )
          }}
        </Field>
        <Input label="City" type="text" name={`${name}.city`} readOnly={readOnly} />
      </AddressBlock>
      <AddressBlock>
        <Input label="Postal Code" type="text" name={`${name}.postalCode`} readOnly={readOnly} />
      </AddressBlock>
    </div>
  )
}

export default Address
