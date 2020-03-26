import * as React from 'react'
import { ReviewAddress, AddressDetails, AddressName, AddressLocation, AddressGroup } from '../../style'

interface AddressData {
  addressName: string
  country: string
  streetAddress: string
  state: string
  province: string
  city: string
  postalCode: string
}
export default function AddressReview(props: AddressData) {
  const { addressName, country, streetAddress, state, province, city, postalCode } = props
  return (
    <>
      <ReviewAddress>{addressName}</ReviewAddress>
      <AddressDetails>
        <AddressName>Country</AddressName>
        <AddressLocation>{country}</AddressLocation>
        <AddressName>Street Address</AddressName>
        <AddressLocation>{streetAddress}</AddressLocation>
        <AddressGroup>
          <div>
            {state ? (
              <div>
                <AddressName>State</AddressName>
                <AddressLocation>{state}</AddressLocation>
              </div>
            ) : (
              <div>
                <AddressName>Province</AddressName>
                <AddressLocation>{province}</AddressLocation>
              </div>
            )}
          </div>
          <div>
            <AddressName>City</AddressName>
            <AddressLocation>{city}</AddressLocation>
          </div>
        </AddressGroup>
        <AddressName>Postal Code</AddressName>
        <AddressLocation>{postalCode}</AddressLocation>
      </AddressDetails>
    </>
  )
}
