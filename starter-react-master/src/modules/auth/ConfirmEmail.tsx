import * as React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { apiBaseUrl } from '../../service/global-variables'
import { Avatar, CssBaseline, Link, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { successAlert, errorAlert } from '../../logic/actions/alerts.actions'

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
  }
}))

interface Props {
  successAlert: any
  errorAlert: any
  match: any
}
const ConfirmEmail = (props: Props) => {
  // const [mailStatus, setMailStatus] = useState(false)
  const classes = useStyles()
  const { match } = props
  const code = match.params.token

  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/user/confirm-email/${code}`)
        setResult(response.data)
        setLoading(false)
        props.successAlert(response.data)
      } catch (error) {
        setResult(error.response.data.message)
        setLoading(false)
        props.errorAlert(error.response.data.message)
      }
    }
    fetchData()
  }, [code])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="subtitle1">
          {loading ? 'Please Wait' : result}
        </Typography>
        <Link href="/login" variant="h5">
          {'Login Here'}
        </Link>
      </div>
    </Container>
  )
}
const mapStateToProps = (state: any) => ({
})

export default withRouter(connect(mapStateToProps, { successAlert, errorAlert })(ConfirmEmail))
