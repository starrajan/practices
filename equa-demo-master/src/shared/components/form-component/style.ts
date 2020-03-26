import styled from 'styled-components'
import { colors, screenSizes } from '../../styles/theme'

export const AddressBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const InputContainer = styled.div`
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 0 1%;
  }
`
export const inputStyleFilled = {
  width: '100%',
  padding: '12px 15px',
  border: '1px solid',
  borderColor: colors.white,
  borderRadius: '2px',
  fontSize: '18px',
  color: colors.black,
  fontFamily: 'Regular',
  outline: 'none',
  background: colors.white,
}
export const inputTextAreaStyleFilled = {
  width: '100%',
  padding: '20px',
  border: '1px solid',
  borderColor: colors.white,
  borderRadius: '2px',
  fontSize: '16px',
  lineHeight: '34px',
  color: '#3E3E3E',
  fontFamily: 'Light',
  outline: 'none',
  background: colors.white,
  overFlow: 'auto',
  minWidth: '110px',
}

export const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    borderRadius: '2px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontFamily: 'Regular',
  }),

  option: (styles: any, { isFocused }: any) => {
    return {
      ...styles,
      cursor: 'pointer',
      backgroundColor: isFocused ? 'white' : 'white',
      color: isFocused ? 'rgba(255, 80, 86)' : 'black',
      lineHeight: 2,
    }
  },

  input: (styles: any) => ({
    ...styles,
    color: 'black',
  }),

  menu: (styles: any) => ({
    ...styles,
    marginTop: 0,
    boxShadow: 'none',
    borderRadius: 0,
  }),

  multiValue: (styles: any) => ({
    ...styles,
    background: '#E7E7E7',
    borderRadius: '2px',
  }),

  multiValueLabel: (styles: any) => ({
    ...styles,
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '22px',

    color: '#02160F',
    background: '#E7E7E7',
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: '#02160F',
    fontSize: '18px',
  }),

  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: 'none',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: '#757575',
    fontSize: '18px',
  }),
}


export const InputLabel = styled.p<any>`
  font-family: Regular;
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
  margin-top: 12px;
  margin-bottom: 4px;
  opacity: ${(props: any) => props.labelOpacity && props.labelOpacity};
`
export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Regular;
`

export const SelectContainer = styled.div`
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 0 1%;
  }
`