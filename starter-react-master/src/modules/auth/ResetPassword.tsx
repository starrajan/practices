import * as React from 'react'
import { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { apiBaseUrl } from '../../service/global-variables'
import { successAlert, errorAlert } from '../../logic/actions/alerts.actions'
import { Avatar, CssBaseline, TextField, Button, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import history from '../../modules/app/components/history'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: '50px',
  },
  invalid: {
    color: 'red',
  },
}))
const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 characters at minimum')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .min(6, 'Password must be 6 characters at minimum')
    .required('Password is required'),
})

interface Props {
  match: any
  successAlert: any
  errorAlert: any
}
function ResetPassword(props: Props) {
  const classes = useStyles()

  const { code } = props.match.params

  const [codeVerified, setCodeVerified] = useState(false)
  const [verifyResult, setVerifyResult] = useState(null)

  const verifyCode = async (code: string) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/user/reset-password/${code}`)

      setCodeVerified(true)
      setVerifyResult(response.data)
    } catch (error) {
      setCodeVerified(false)
      setVerifyResult(error.response.data.message)
    }
  }
  useEffect(() => {
    verifyCode(code)
  }, [code])

  const submitValues = async (values: any) => {
    const { password } = values
    try {
      const res = await axios.post(`${apiBaseUrl}/user/reset-password/${code}`, { password })
      props.successAlert(res.data)
      history.push('/login')
    } catch (error) {
      props.errorAlert(error.response.data.message)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset-Password
        </Typography>
        {codeVerified ? (
          <Fragment>
            <Typography component="p" variant="body2">
              Code Verified for {verifyResult}, please enter a new password
            </Typography>
            <Formik
              initialValues={{ oldPassword: '', password: '', confirmPassword: '' }}
              validationSchema={ResetPasswordSchema}
              onSubmit={(values, { setSubmitting }) => {
                submitValues(values)
                setSubmitting(false)
              }}
            >
              {formik => (
                <Form className={classes.form} noValidate>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      label="New Password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      as={TextField}
                    />
                    <ErrorMessage component="div" name="password" className={classes.invalid} />
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      as={TextField}
                    />
                    <ErrorMessage component="div" name="confirmPassword" className={classes.invalid} />
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? 'Please wait...' : 'RESET MY PASSWORD'}
                  </Button>
                </Form>
              )}
            </Formik>
          </Fragment>
        ) : verifyResult ? (
          verifyResult
        ) : (
          'Verifying code...'
        )}
      </div>
    </Container>
  )
}

export default connect(null, { successAlert, errorAlert })(ResetPassword)
