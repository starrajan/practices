import * as React from 'react'
import { connect } from 'react-redux'
import { registerStart } from '../../logic/actions/user.actions'
import { Avatar, CssBaseline, Link, Grid, TextField, Button, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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
  registerStart: any
}
const Register = (props: Props) => {
  const classes = useStyles()
  const registerValidationSchema = Yup.object().shape({
    // FirstName: Yup.string()
    //   .max(40, 'Please enter no more than 40 characters')
    //   .required('Please enter your first name'),
    // LastName: Yup.string()
    //   .max(40, 'Please enter no more than 40 characters')
    //   .required('Please enter your last name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters at minimum')
      .required('Password is required'),
  })

  const submitValues = async (values: any) => {
    props.registerStart(values)
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <Formik
          initialValues={{
            // FirstName: '',
            // LastName: '',
            email: '',
            password: '',
          }}
          validationSchema={registerValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            submitValues(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form className={classes.form} noValidate>
              {/* <div className="form-group">
                <Field type="text" name="FirstName" label="FirstName" variant="outlined" fullWidth margin="normal" as={TextField} />
                <ErrorMessage component="div" name="FirstName" className={classes.invalid} />
              </div>
              <div className="form-group">
                <Field type="text" name="LastName" label="LastName" variant="outlined" fullWidth margin="normal" as={TextField} />
                <ErrorMessage component="div" name="LastName" className={classes.invalid} />
              </div> */}
              <div className="form-group">
                <Field type="email" name="email" label="Email" variant="outlined" fullWidth margin="normal" as={TextField} />
                <ErrorMessage component="div" name="email" className={classes.invalid} />
              </div>
              <div className="form-group">
                <Field type="password" name="password" label="Password" fullWidth margin="normal" variant="outlined" as={TextField} />
                <ErrorMessage component="div" name="password" className={classes.invalid} />
              </div>

              <Button type="submit" fullWidth variant="contained" color="primary" disabled={props.loading} className={classes.submit}>
                {props.loading ? 'Please wait...' : 'Submit'}
              </Button>

              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {'Already have an account? Login'}
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

export default connect(mapStateToProps, { registerStart })(Register)
