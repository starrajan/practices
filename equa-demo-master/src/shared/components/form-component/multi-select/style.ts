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
