import * as React from 'react'
import styled from 'styled-components'
// import { colorChangeDelay } from '@styles/styled'
// import { StyledModal } from '@components/modal/style';
import { colors, theme } from './theme'

export const StyledForm = styled.div`
  margin: 0 auto;
  padding: 32px;
  border-radius: 6px;
  text-align: left;
  max-width: 812px;
  background-color: ${colors.white};
  box-shadow: ${theme.boxShadow}
  form {
    display: flex;
    flex-direction: column;
  }
  > h1,
  p {
    margin: 10px;
    line-height: 1.6em;
  }
  hr {
    margin: 20px -32px;
  }
  input {
    &:disabled {
      color: ${colors.grey};
      &::placeholder {
        color: ${colors.grey};
      }
    }
  }
`

export const FormButtonLayout = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`

export const StyledField = styled.div`
  margin-bottom: 32px;
`
export const StyledStepForm = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  form {
    > div:nth-child(odd) {
      margin: 0 20px;
      float: left;
    }
    > div:nth-child(even) {
      padding-left: 60px;
      margin-left: 38px;
      margin-top: 5px;
      max-width: 700px;
    }
  }
`

// export const StyledStepField = styled.div<any>`
//   border-left: 8px solid ${(props: any) => (!props.complete ? colors.primary : colors.green)};
//   padding-bottom: 45px;
//   transition: border-left-color ${colorChangeDelay};
//   p {
//     color: ${colors.white};
//     font-size: 0.9em;
//   }
//   > div {
//     padding: 20px;
//     border-radius: 4px;
//     border: 2px solid transparent;
//     transition: 300ms border;
//     outline: 0;
//     background-color: ${colors.greyBackground};
//     > label {
//       display: block;
//       text-align: start;
//       margin-bottom: 10px;
//       font-size: 1.2em;
//       line-height: 29px;
//     }
//   }

//   > div:focus{
//     border: 2px solid ${colors.green};
//   }

//   > div:focus-within:not(${StyledModal}){
//     border: 2px solid ${colors.green};
//   }


// `

export const StepLabel = styled.div`
  display: flex;
  align-items: center;
  > label {
    margin-left: 12px;
  }
`

export const FileTarget = styled.div`
  display: flex;
  align-items: center;
  background: rgba(2, 22, 15, 0.09); // TODO: May need to be #e7f1eb; (CJ)
  border-radius: 10px;
  margin-top: 24px;
  padding: 18px;
  border: 2px dashed #5a6872;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  cursor: pointer;
  @media (min-width: 760px) {
    width: 75%;
  }
  > div {
    width: 100%;
    text-align: center;
    color: ${colors.secondary};
    font-size: 14px;
  }
  h3 {
    margin-bottom: 0;
    margin-top: 40px;
  }
  p {
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
    color: ${colors.white};
  }
  svg {
    width: 500px;
  }
`
export const SetupLabel = styled.label`
    display: block;
    text-align: start;
    margin-bottom: 40px;
    margin-top: 24px;
    font-size: 1.2em;
    line-height: 29px;
`
export const InputLabel = styled.div`
    display: block;
    margin-top:10px;
    text-align: start;
    line-height: 22px;
    font-size: 0.9em;
    color: ${colors.grey};
`
