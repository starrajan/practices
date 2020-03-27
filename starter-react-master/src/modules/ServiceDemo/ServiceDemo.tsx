import React, { SyntheticEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

import {
  Paper,
  Grid,
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Button,
  Snackbar,
  SnackbarContent,
  IconButton,
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import { green } from '@material-ui/core/colors'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useHttpGet, useHttpGetsimpleunauth, useHttpPostunauth, useHttpDelete } from '../../service/global-service'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    dummywrapper: {
      marginTop: theme.spacing(12),
    },
    title: {
      fontSize: 18,
    },
    customcard: {
      margin: theme.spacing(2, 0),
    },
    form: {
      marginTop: theme.spacing(1),
      width: '100%', // Fix IE 11 issue.
    },
    invalid: {
      color: 'red',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    success: {
      backgroundColor: green[600],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)

export interface Props {
  className?: string
  message?: string
  onClose?: () => void
  variant: keyof typeof variantIcon
}

function MySnackbarContentWrapper(props: Props) {
  const classes = useStyles()
  const { className, message, onClose, variant, ...other } = props
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      //@ts-ignore
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  )
}

function ServiceDemo() {
  const [PostSuccess, setPostSuccess] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const handleClick = () => {
    setOpen(true)
    setMessage('Post deleted!')
  }

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  //get single data call inside a function
  const [detailsData, setDetailsData] = useState<any>({})
  const GetaPost = async (id: any) => {
    let res: any = await useHttpGetsimpleunauth(`/posts/${id}`)
    setDetailsData(res.data)
  }
  //get single data

  // get all data react hook global call
  const [loading, fetchedData] = useHttpGet('/posts', [PostSuccess])
  const selectedPost = fetchedData ? fetchedData.slice(0, 5) : []
  // get all data

  // post a data
  const SubmitValues = async (values: any) => {
    let res: any = await useHttpPostunauth('/posts', 'abc')
    if (res.status === 201) {
      setOpen(true)
      setMessage('Post added successfully!')
      setPostSuccess(!PostSuccess)
    }
  }
  // post a data

  // delete a data
  const DeletePost = async (id: any) => {
    let res: any = await useHttpDelete(`/posts/${id}`)
    console.log('TCL: DeletePost -> res', res)
    handleClick()
  }
  // delete a data

  const classes = useStyles()
  const PostSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    body: Yup.string().required('body is required'),
  })
  return (
    <div className={classes.dummywrapper}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Create Post</Paper>
            <Formik
              initialValues={{ title: '', body: '' }}
              validationSchema={PostSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  SubmitValues(values)
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({ isSubmitting }) => (
                <Form className={classes.form} noValidate>
                  <div className="form-group">
                    <Field type="text" name="title" label="Title" variant="outlined" fullWidth margin="normal" as={TextField} />
                    <ErrorMessage component="div" name="title" className={classes.invalid} />
                  </div>
                  <div className="form-group">
                    <Field type="text" name="body" label="Body" fullWidth margin="normal" variant="outlined" as={TextField} />
                    <ErrorMessage component="div" name="body" className={classes.invalid} />
                  </div>
                  <Button type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting} className={classes.submit}>
                    {isSubmitting ? 'Please wait...' : 'Submit'}
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Post list</Paper>
            {selectedPost.map((post: any) => (
              <Card key={post.id} className={classes.customcard}>
                <CardContent>
                  <Typography className={classes.title} gutterBottom>
                    {post.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => GetaPost(post.id)} size="small">
                    Details
                  </Button>
                  <Button onClick={() => DeletePost(post.id)} size="small">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Post Details</Paper>
            <Card className={classes.customcard}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  {detailsData.title}
                </Typography>
                <Typography className={classes.title} color="textSecondary" component="p">
                  {detailsData.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MySnackbarContentWrapper onClose={handleClose} variant="success" message={message} />
        </Snackbar>
      </Container>
    </div>
  )
}
export default ServiceDemo
