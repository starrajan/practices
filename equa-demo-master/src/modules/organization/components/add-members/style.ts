import styled from 'styled-components'
import { Button } from 'shared/components/button'
import { screenSizes } from 'shared/styles/theme'
export const Container = styled.div`
  width: 600px;
  max-width: 85%;
  margin: 0 auto;
  padding: 50px 0;
  font-family: Regular;
`
export const MemberTitle = styled.div`
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: #30424d;
  margin-bottom: 1rem;
`
export const InputFiledStyle = {
  width: '100%',
  padding: '12px 15px',
  border: '1px solid',
  borderColor: '#898989',
  borderRadius: '2px',
  fontSize: '18px',
  color: '#3E3E3E',
  fontFamily: 'Regular',
  outline: 'none',
  background: '#FFFFFF',
  boxSizing: 'border-box',
}
export const InputLabel = styled.p<any>`
  font-family: Regular;
  color: #3e3e3e;
  font-size: 16px;
  text-transform: capitalize;
  margin-top: 12px;
  margin-bottom: 4px;
  opacity: ${(props: any) => props.labelOpacity && props.labelOpacity};
`
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const InputBox = styled.div`
  width: 49%;
`
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`
export const MemberButton = styled(Button)`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  outline: none !important;
`
export const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    borderRadius: '2px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontFamily: 'Regular',
    borderBottom: state.isFocused ? '1px solid #898989' : '',
  }),

  option: (styles: any, { isFocused }: any) => {
    return {
      ...styles,
      cursor: 'pointer',
      backgroundColor: isFocused ? 'white' : 'white',
      color: isFocused ? 'blue' : 'black',
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
    color: '#3E3E3E',
    fontSize: '18px',
  }),

  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: 'none',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: '#3E3E3E',
    fontSize: '18px',
  }),
}
export const SelectContainer = styled.div`
  border: 1px solid #898989
  border-radius: 2px;
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 0 1%;
  }
`
