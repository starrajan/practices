import * as React from 'react'
import { connect } from 'react-redux'
import { apiBaseUrl } from '../../service/global-variables'
import { successAlert, errorAlert } from '../../logic/actions/alerts.actions'
import { Avatar, CssBaseline, TextField, Button, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

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
  oldPassword: Yup.string()
    .min(6, 'Password must be 6 characters at minimum')
    .required('Password is required'),

  newPassword: Yup.string()
    .min(6, 'Password must be 6 characters at minimum')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
    .min(6, 'Password must be 6 characters at minimum')
    .required('Password is required'),
})

interface Props {
  successAlert: any
  errorAlert: any
}
function ResetPassword(props: Props) {
  const classes = useStyles()

  const SubmitValues = async (values: any) => {
    const { oldPassword, newPassword } = values
    try {
      const res = await axios.post(`${apiBaseUrl}/user/change-password`, { oldPassword, newPassword })
      props.successAlert(res.data)
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
        <Formik
          initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values, { setSubmitting }) => {
            SubmitValues(values)
            setSubmitting(false)
          }}
        >
          {(formik) => (
            <Form className={classes.form} noValidate>
              <div className="form-group">
                <Field
                  type="password"
                  name="oldPassword"
                  label="Current Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                />
                <ErrorMessage component="div" name="oldPassword" className={classes.invalid} />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="newPassword"
                  label="New Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                />
                <ErrorMessage component="div" name="newPassword" className={classes.invalid} />
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

              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Please wait...' : 'RESET MY PASSWORD'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default connect(null, { successAlert, errorAlert })(ResetPassword)
