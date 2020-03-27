import * as React from 'react'
import { connect } from 'react-redux'
import { loginStart } from '../../logic/actions/user.actions'
import { Avatar, CssBaseline, FormControlLabel, Link, Grid, TextField, Button, Checkbox, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
/* import { useHttpPostunauth } from '../../service/global-service' */
import * as Yup from 'yup'

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
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  invalid: {
    color: 'red',
  },
}))

interface Props {
  loading: boolean
  loginStart: any
}

function Login(props: Props) {
  const classes = useStyles()
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters at minimum')
      .required('Password is required'),
  })

  const SubmitValues = async (values: any) => {
    props.loginStart(values)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            SubmitValues(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form className={classes.form} noValidate>
              <div className="form-group">
                <Field type="email" name="email" label="Email" variant="outlined" fullWidth margin="normal" as={TextField} />
                <ErrorMessage component="div" name="email" className={classes.invalid} />
              </div>
              <div className="form-group">
                <Field type="password" name="password" label="Password" fullWidth margin="normal" variant="outlined" as={TextField} />
                <ErrorMessage component="div" name="password" className={classes.invalid} />
              </div>
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

              <Button type="submit" fullWidth variant="contained" color="primary" disabled={props.loading} className={classes.submit}>
                {props.loading ? 'Please wait...' : 'Submit'}
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

const mapStateToProps = (state: any) => ({
  loading: state.user.loading,
})

export default connect(mapStateToProps, { loginStart })(Login)
