import * as React from 'react'
import { Field, Form } from 'react-final-form'
import { StyledField, StyledForm } from '../../../../shared/styles/styledForm'
// import { isUsernameOrEmail } from '@helpers/field-validators'
// import { FieldErrors } from '@components/field-errors'
// import { resetPassword, ResetPasswordDispatch, PasswordResetRequest } from '@logic'
import { connect } from 'react-redux'
import { Button } from '../../../../shared/components/button'
import { CenterContainer, StyledH1 } from '../../../../shared/styles/styled'
import { colors } from '../../../../shared/styles/theme'

interface Props {
  // resetPassword: ResetPasswordDispatch
}
const component = (props: Props) => {
  const onSubmit = () => {
    // props.resetPassword(request)
  }

  return (
    <CenterContainer>
      <StyledH1 color={colors.white}>Reset Your Password</StyledH1>
      <StyledForm>
        <p>Enter your username or email. A temporary password will be emailed to you with further instructions.</p>
        <Form
          initialValues={{
            usernameOrEmail: '',
          }}
          onSubmit={onSubmit as any}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="usernameOrEmail"
                // validate={isUsernameOrEmail}
                render={({ input, meta }) => (
                  <StyledField>
                    <label>Username or Email Address</label>
                    <input type="text" {...input} />
                    {/* <FieldErrors meta={meta} /> */}
                  </StyledField>
                )}
              />
              <CenterContainer>
                <Button type="submit">Submit</Button>
              </CenterContainer>
            </form>
          )}
        />
      </StyledForm>
    </CenterContainer>
  )
}

export default connect(
  null,
  // { resetPassword }
)(component)
