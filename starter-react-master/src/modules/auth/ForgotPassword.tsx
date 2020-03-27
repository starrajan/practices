import * as React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { successAlert, errorAlert } from '../../logic/actions/alerts.actions'
import { Avatar, CssBaseline, TextField, Button, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { apiBaseUrl } from '../../service/global-variables'

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
  backArrow: {
    cursor: 'pointer',
    color: '#3f51b5',
    '&:hover': {
      color: '#007bff',
    },
  },
  resendOtp: {
    textAlign: 'right',
  },
}))

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
})

interface Props {
  successAlert: any
  errorAlert: any
  loading: boolean
  mailVerify: boolean
  otpVerify: boolean
  reqMailVerify: any
  reqOtpVerify: any
}
function ForgotPassword(props: Props) {
  const classes = useStyles()

  const submitEmailValues = async (values: any) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/user/forgot-password`, values)
      props.successAlert(response.data)
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
          Forgot-Password
        </Typography>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={EmailSchema}
          onSubmit={(values, { setSubmitting }) => {
            submitEmailValues(values)
            setSubmitting(false)
          }}
        >
          {formik => (
            <Form className={classes.form} noValidate>
              <div className="form-group">
                <Field type="email" name="email" label="Email" variant="outlined" fullWidth margin="normal" as={TextField} />
                <ErrorMessage component="div" name="email" className={classes.invalid} />
              </div>
              <Button type="submit" fullWidth variant="contained" color="primary" disabled={formik.isSubmitting} className={classes.submit}>
                {formik.isSubmitting ? 'Please wait...' : 'Submit'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default connect(null, { successAlert, errorAlert })(ForgotPassword)
