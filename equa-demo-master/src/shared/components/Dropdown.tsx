import * as React from 'react'
import { useState } from 'react'
import { colors, screenSizes } from '../../shared/styles/theme'

const Dropdown = (props: any) => {
  const DropStyle = {
    background: colors.white,
    width: '100%',
    height: '44px',
    border: 'none',
    borderRadius: '3px',
    fontFamily: 'Regular',
  }
  const DropStyleLine = {
    background: colors.white,
    border: '1px solid',
    borderColor: colors.grey,
    width: '100%',
    height: '44px',
    borderRadius: '3px',
    fontFamily: 'Regular',
  }
  const DropStyleAuth = {
    background: '#202F40',
    border: 'none',
    width: '100%',
    height: '44px',
    borderRadius: '0',
    fontFamily: 'Regular',
    color:colors.white
  }

  const DropStyleSimple = {
    background: 'none',
    border: 'none',
   color:colors.white,
    height: '44px',
    borderRadius: '3px',
    fontFamily: 'Regular',
    outline:'none',
    marginRight:'30px'
  }

  return (
    <select
      style={props.dropDownStyle === 'basic' ? DropStyleLine : DropStyle || props.dropDownStyle === 'auth' ? DropStyleAuth : DropStyle}
      onChange={props.onValueSelect}
      value={props.selectedValue}
    >
      {props.dropData.map((char: any, i: any) => (
        <option key={i} value={char.value}>
          {char.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
